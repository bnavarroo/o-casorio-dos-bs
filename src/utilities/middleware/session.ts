import type { IronSessionOptions } from 'iron-session';
import { COOKIES_CONFIG } from '@config/cookies';
import { IUser } from '@shared/types/user';

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: COOKIES_CONFIG.keys.token,
  cookieOptions: {
    path: COOKIES_CONFIG.path,
    maxAge: 60 * 60 * 24 * 1, // 1 week
    secure: process.env.NODE_ENV === 'production',
  },
};

export const protectedRoutes = ['/api/guest'];

declare module 'iron-session' {
  interface IronSessionData {
    user?: IUser;
  }
}
