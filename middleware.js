import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/blog/yayu_middleware", request.url));
}

export const config = {
  matcher: "/blog/yayu",
};
