const base = '/api';

const apiRoutes: { [key: string]: string } = {
  admin: `${base}/admin`,
  guest: `${base}/guest`,
  guests: `${base}/guests`,
};

export const getEndpoint = (endpoint: string, urlParams: Array<string> = []) =>
  `${apiRoutes?.[endpoint]}/${urlParams?.join('/')}`;
