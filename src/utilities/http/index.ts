/* eslint-disable no-console */
import { TStringMap } from '@shared/types/_globals';
import { THttpMethod, IHttpResponseFetch, IHttpResponseHeaders } from './types';

const objectToUrlParams = (object: TStringMap): string => {
  let params = '';
  Object.keys(object).forEach((key) => {
    params +=
      params === ''
        ? `?${key}=${encodeURIComponent(object[key])}`
        : `&${key}=${encodeURIComponent(object[key])}`;
  });
  return params;
};

const getHttpRequestHeaders = (method: THttpMethod): IHttpResponseHeaders => ({
  method,
  headers: new Headers({
    Accept: 'application/json, text/plain, multipart/form-data, */*',
    'Content-Type': 'application/json; charset=UTF-8',
  }),
});

const executeHttpRequest = <T>(
  url: string,
  headers: object
): IHttpResponseFetch<T> =>
  // eslint-disable-next-line indent
  fetch(url, headers).then((response) => response.json());

export const get = <T>(
  url: string,
  queryParams: TStringMap = {}
): IHttpResponseFetch<T> => {
  try {
    const fmtUrl = `${url}${objectToUrlParams(queryParams)}`;
    const fmtHeaders = getHttpRequestHeaders('get');
    return executeHttpRequest(fmtUrl, fmtHeaders);
  } catch (error) {
    console.error(
      `Um erro foi disparado ao tentar realizar um GET para ${url}`,
      error
    );
    return null;
  }
};
