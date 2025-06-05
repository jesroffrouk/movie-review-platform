import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublic = path == '/login' || path == '/signup' || path == '/verifyemail' || path == '/' || path == '/about'
  const token = request.cookies.get('token')?.value
  const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET!)


  if(token){
    try {
      await jwtVerify(token,secretKey)
    } catch (error) {
      console.log('Invalid token:', error);
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }
  
  if(isPublic && token){
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(!isPublic && !token){
    return NextResponse.redirect(new URL('/auth',request.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/moviezone',
    '/profile',
    '/find'
  ],
}