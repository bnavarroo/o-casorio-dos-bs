type TValidKeys = 'guest' | 'token' | 'session';
type TCookiesMapKeys = { [key in TValidKeys]: string };

const prefix = 'ocdb_';
const cookieMapKeys: TCookiesMapKeys = {
  guest: `${prefix}guest`,
  token: `${prefix}authtoken`,
  session: `${prefix}sessionId`,
};

export const COOKIES_CONFIG = {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  keys: cookieMapKeys,
  path: '/',
};
