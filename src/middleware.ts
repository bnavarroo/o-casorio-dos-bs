import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import { sessionOptions, protectedRoutes } from '@utilities/middleware/session';

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;
  const session = await getIronSession(req, res, sessionOptions);
  const { user } = session;

  // API
  if (pathname.includes('/api/')) {
    const token = req.headers.get(process.env.SECRET_KEY as string) ?? '';
    const isValidToken = token === process.env.SECRET_TOKEN;

    // Protege a API e suas rotas restritas
    if (
      (isValidToken &&
        protectedRoutes.includes(pathname) &&
        !user?.isLoggedIn) ||
      !isValidToken
    ) {
      return NextResponse.rewrite(new URL('/api/auth/unauthorized', req.url));
    }
  }

  // ADMIN
  if (pathname.includes('/admin')) {
    if (!user?.isLoggedIn && !pathname.includes('login')) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    if (user?.isLoggedIn && pathname.includes('login')) {
      return NextResponse.redirect(new URL('/admin/home', req.url));
    }
  }

  return res;
};

export const config = {
  matcher: ['/api/:path*', '/admin/:path*'],
};

export default middleware;
