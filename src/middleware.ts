// middleware.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROLES } from "./constants/userRoles";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const loginUrl = new URL("/auth/login", req.url);

  // No token case
  if (!token) {
    loginUrl.searchParams.set("forbidden", "Please login to continue");
    return NextResponse.redirect(loginUrl);
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentUser = payload.user;

    // Role-based access check
    if (req.nextUrl.pathname.startsWith("/admin") && currentUser.role !== ROLES.ADMIN) {
      loginUrl.searchParams.set("forbidden", "Admin privileges required");
      return NextResponse.redirect(loginUrl);
    }

    // JWT expiration check
    if (payload.exp) {
      const currentTime = Date.now() / 1000;
      if (currentTime >= payload.exp) {
        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete("auth_token");
        loginUrl.searchParams.set("jwt_expired", "Your session has expired. Please login again");
        return response;
      }
    }

    return NextResponse.next();
  } catch (error) {
    loginUrl.searchParams.set("certain_error", "Authentication error. Please login again");
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*"]
};