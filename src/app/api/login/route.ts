import { NextRequest, NextResponse } from "next/server";
import { googleOAuthGetUserEmail } from "../../../../util";
import { UserService } from "../../../../services/UserService";

export function middleware(request: any) {
  console.log("middleware");
  return NextResponse.next();
}

export async function POST(req: NextRequest) {
  const rawData = await new Response(req.body).text();
  const parsedData = JSON.parse(rawData);
  const googleAccessToken = parsedData?.token;
  let [emailId, picture, name, success = false] = await googleOAuthGetUserEmail(
    googleAccessToken
  );
  if (success) {
    let user = await new UserService().getUserByEmaildId(emailId);
    console.log("auth data", emailId, picture, name, user);
    if (!user) {
      const userCreated = await new UserService().createUser({
        emailId: emailId,
        profilePicture: picture,
        name: name,
      });
      if (!userCreated) {
        return NextResponse.json({ message: "User not created" });
      }
      user = await new UserService().getUserByEmaildId(emailId);
    }
    if (user) {
      const token = await new UserService().getAuthToken(user.id);
      return NextResponse.json({ status: "success", accessToken: token });
    }
    return NextResponse.json({
      status: "failed",
      message: "Something went wrong",
    });
  }
}
