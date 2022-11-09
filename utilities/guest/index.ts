import { parseCookies } from 'nookies';
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
