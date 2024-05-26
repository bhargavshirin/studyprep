import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useAuth } from './src/app/hooks/useAuth';
 
export function middleware(request: NextRequest) {
  let {user, loading, auth} = useAuth();
  console.log("user",user);
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}