const base = '/api';

const apiRoutes: { [key: string]: string } = {
  admin: `${base}/admin`,
  guest: `${base}/guest`,
  guestList: `${base}/guest/list`,
  user: `${base}/user`,
};

export const getEndpoint = (endpoint: string, urlParams: Array<string> = []) =>
  `${apiRoutes?.[endpoint]}/${urlParams?.join('/')}`;
