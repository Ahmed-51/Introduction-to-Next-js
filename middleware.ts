import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse, NextRequest } from 'next/server'

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
//   runtime: 'nodejs',
// };



export default async function middleware(req: NextRequest) {
    // return NextResponse.redirect(new URL('/dashboard', req.nextUrl))

}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}