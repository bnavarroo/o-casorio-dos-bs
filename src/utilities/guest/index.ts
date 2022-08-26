import type { NextApiRequest, NextPageContext } from 'next';
import { parseCookies } from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';
import { IGuest } from '@shared/types/guest';

export const getGuestFromCookies = (
  ctx?: Pick<NextPageContext, 'req'> | { req: NextApiRequest } | null
): IGuest | undefined => {
  const cookies = parseCookies(ctx);
  const persistedGuest = JSON.parse(
    cookies[COOKIES_CONFIG.keys.guest] ?? 'null'
  );

  return persistedGuest;
};
