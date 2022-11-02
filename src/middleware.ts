import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.includes('/api/')) {
    const token = req.headers.get(process.env.SECRET_KEY as string) ?? '';
    const isValidToken = token === process.env.SECRET_TOKEN;

    if (!isValidToken) {
      return NextResponse.rewrite(new URL('/api/auth/unauthorized', req.url));
    }
  }

  return NextResponse.next();
}

/*
import { getIronSession } from 'iron-session/edge';
import { sessionOptions } from '@utilities/middleware/session';

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);

  // do anything with session here:
  const { user } = session;

  // like mutate user:
  // user.something = someOtherThing;
  // or:
  // session.user = someoneElse;

  // uncomment next line to commit changes:
  // await session.save();
  // or maybe you want to destroy session:
  // await session.destroy();

  // eslint-disable-next-line no-console
  console.log('from middleware', { user });

  // demo:
  if (!user?.isLoggedIn) {
    return NextResponse.rewrite(new URL('/api/auth/unauthorized', req.url));
  }

  return res;
};

export const config = {
  matcher: ['/api/:path*'],
};
*/
