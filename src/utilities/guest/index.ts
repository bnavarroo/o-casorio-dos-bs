import Router from 'next/router';
import { parseCookies, destroyCookie } from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';
import { IGuest } from '@shared/types/guest';
import { TNextCtx } from '@shared/types/_globals';

export const getGuestFromCookies = (ctx?: TNextCtx): IGuest | undefined => {
  const cookies = parseCookies(ctx);
  const persistedGuest = JSON.parse(
    cookies[COOKIES_CONFIG.keys.guest] ?? 'null'
  );

  return persistedGuest;
};

export const guestLogout = (redirectTo = '/'): void => {
  const { keys, path } = COOKIES_CONFIG;
  destroyCookie(null, keys.guest, { path });
  setTimeout(() => {
    Router.push(redirectTo);
  }, 1000);
};

// eslint-disable-next-line prettier/prettier
export const handleGuestLogout = (redirectTo = '/') => (): void => guestLogout(redirectTo);
