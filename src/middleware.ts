import { NextRequest, NextResponse } from 'next/server';

const unauthenticatedURL = ['/', '/new-password', '/reset-password', '/otp'];

export default function middleware(req: NextRequest) {
  if (!unauthenticatedURL.includes(req.nextUrl.pathname)) {
    const user = req.cookies.get('duduzili-auth')?.value;

    const url = req.nextUrl.clone();
    url.pathname = '/';
    if (!user) {
      return NextResponse.redirect(url);
    }
  }
  console.log('Current Path:', req.nextUrl.pathname);
  console.log('User Cookie:', req.cookies.get('duduzili-auth')?.value);
  return NextResponse.next();
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - _next
   * - | static (static files)
   * - | image (image optimization files)
   * - | data (json files)
   * - api (API routes)
   *
   * Also, skip all files ending with an extension
   * - favicon.ico (favicon file)
   * - public (assets)
   */
  matcher: '/((?!api|_next|.*\\..*).*)',
};
