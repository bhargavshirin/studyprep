import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
export class UserService {
  private prisma = new PrismaClient();
  async getUserByEmaildId(emailId: string) {
    return await this.prisma.user.findUnique({
      where: {
        emailId: emailId,
      },
    });
  }
  async createUser({
    emailId,
    name,
    profilePicture,
  }: {
    emailId: string;
    name: string;
    profilePicture: string;
  }) {
    await this.prisma.user.create({
      data: {
        emailId,
        name,
        profilePicture,
      },
    });
    return true;
  }
async getAuthToken(userId: number): Promise<string> {
    let token: string = await jwt.sign(
        { user_id: userId, scope: "USER" },
        "secret",
        { expiresIn: "15d" }
    );
    return token;
}
}