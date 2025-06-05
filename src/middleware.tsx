import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Skip middleware for API routes
  if (path.startsWith('/api')) {
    return NextResponse.next()
  }

  const protectedRoutes = ['/find', '/moviezone', '/profile']
  const isProtected = protectedRoutes.includes(path)

  const token = request.cookies.get('token')?.value
  const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET!)

  let isTokenValid = false

  if (token) {
    try {
      await jwtVerify(token, secretKey)
      isTokenValid = true
    } catch (err) {
      console.log('Invalid token:', err)
    }
  }

  // ✅ If trying to access a protected route without token → redirect to /auth
  if (isProtected && !isTokenValid) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // ✅ If already logged in, prevent access to /auth
  if (path === '/auth' && isTokenValid) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}


export const config = {
  matcher: [
    '/moviezone',
    '/profile',
    '/find',
    '/auth'
  ],
}