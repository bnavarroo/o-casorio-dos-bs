const base = '/api';

const apiRoutes: { [key: string]: string } = {
  admin: `${base}/admin`,
  guest: `${base}/guest`,
  guestList: `${base}/guest`,
  user: `${base}/user`,
  login: `${base}/login`,
  logout: `${base}/logout`,
};

export const getEndpoint = (endpoint: string, urlParams: Array<string> = []) =>
  `${apiRoutes?.[endpoint]}/${urlParams?.join('/')}`;
