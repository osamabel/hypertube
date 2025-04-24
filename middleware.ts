// middleware.ts (place in your project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the auth token from cookies
  const authToken = request.cookies.get('auth_token')?.value;
  
  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  console.log("\n\n========= MIDDLEWARE RUNNING =========");
  console.log("Path:", request.nextUrl.pathname);
  console.log("Auth Token:", authToken);
  console.log("Is Protected Route:", isProtectedRoute);
  console.log("=====================================\n\n");
  
  // If it's a protected route and user isn't authenticated, redirect to signin
  if (isProtectedRoute && !authToken) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
  
  // Prevent authenticated users from accessing auth pages
  const isAuthRoute = authRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );
  
  if (isAuthRoute && authToken) {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  
  return NextResponse.next();
}

const protectedRoutes = ['/home', '/profile', '/movies', '/watch'];
const authRoutes = ['/signin', '/signup'];

export const config = {
  matcher: [
    '/home/:path*',
    '/profile/:path*',
    '/movies/:path*',
    '/watch/:path*',
    '/signin',
    '/signup',
  ],
};