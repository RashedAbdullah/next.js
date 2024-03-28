import { NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["en", "ar", "bn"];

export const middleware = (request) => {
  const pathName = request.nextUrl.pathName;

  //   return NextResponse.json({
  //     key: "Value",
  //   });
  //   return NextResponse.next();

  //   return NextResponse.redirect(new URL("/settings", request.url));

  return NextResponse.rewrite(new URL("/settings", request.url));
};

export const config = {
  //   matcher: "/about",
  matcher: ["/about", "/dynamic"],
};
