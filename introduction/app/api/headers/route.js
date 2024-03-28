import { headers } from "next/headers";

const GET = async (request) => {
  //   const requestHeaders = new Headers(request.headers);
  const requestHeaders = headers();
  console.log(requestHeaders.get("Authorization"));
  return new Response("This is header");
};

export { GET };
