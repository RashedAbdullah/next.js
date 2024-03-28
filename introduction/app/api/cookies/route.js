import { cookies, headers } from "next/headers";

const GET = async (request) => {
  const headerList = headers();

  // from next.js:
  cookies().set("auth", "false");
  console.log(cookies().get("auth"));

  // from vanilla javascript:
  console.log(request.cookies.get("Name"));
  return new Response("This is Cookies", {
    headers: {
      "Set-Cookie": "Name=RashedAbdullah",
    },
  });
};

export { GET };
