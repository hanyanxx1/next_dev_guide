// import { NextResponse } from "next/server";
// import { RateLimiter } from "limiter";
// const limiter = new RateLimiter({ tokensPerInterval: 3, interval: "min", fireImmediately: true });

// export async function middleware(request) {
//   const remainingRequests = await limiter.removeTokens(1);
//   console.log("Remaining requests:", remainingRequests);
//   if (remainingRequests < 0) {
//     return new NextResponse(JSON.stringify({ success: false, message: "Too Many Requests" }), {
//       status: 429,
//       headers: { "content-type": "application/json" },
//     });
//   }

//   return NextResponse.next();
// }

// // 设置匹配路径
// export const config = {
//   matcher: "/api/chat",
// };

import { NextResponse } from "next/server";

function chain(functions, index = 0) {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

function withMiddleware1(middleware) {
  return async (request) => {
    console.log("middleware1 " + request.url);
    return middleware(request);
  };
}

function withMiddleware2(middleware) {
  return async (request) => {
    console.log("middleware2 " + request.url);
    return middleware(request);
  };
}

export default chain([withMiddleware1, withMiddleware2]);

export const config = {
  matcher: "/api/:path*",
};
