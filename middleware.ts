import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, res: NextResponse) {
    if(!request.cookies.has('token')){

        return NextResponse.redirect('/api/signin')
    } else {
        return NextResponse.rewrite(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/createblogs/:path*',
}