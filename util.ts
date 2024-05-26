export async function googleOAuthGetUserEmail(
  token: string
): Promise<[string, string, string, boolean]> {
  try {
    let response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status == 200) {
      let data = await response.json();
      console.log("data", data);
      if (data.email) {
        return [data.email, data.picture, " ", true];
      }
    }
  } catch (e) {
    console.log(e);
  }
  return ["", "", "", false];
}
