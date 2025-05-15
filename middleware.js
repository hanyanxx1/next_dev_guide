import { NextResponse } from "next/server";
import { RateLimiter } from "limiter";
const limiter = new RateLimiter({ tokensPerInterval: 3, interval: "min", fireImmediately: true });

export async function middleware(request) {
  const remainingRequests = await limiter.removeTokens(1);
  console.log("Remaining requests:", remainingRequests);
  if (remainingRequests < 0) {
    return new NextResponse(JSON.stringify({ success: false, message: "Too Many Requests" }), {
      status: 429,
      headers: { "content-type": "application/json" },
    });
  }

  return NextResponse.next();
}

// 设置匹配路径
export const config = {
  matcher: "/api/chat",
};
