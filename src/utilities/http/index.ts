import { TStringMap } from '@shared/types/_globals';
import { IHttpRequestParams, IHttpResponseFetch } from './types';

const parseObjectToQs = (object: TStringMap = {}): string => {
  let params = '';
  Object.keys(object).forEach((key) => {
    params +=
      params === ''
        ? `?${key}=${encodeURIComponent(object[key])}`
        : `&${key}=${encodeURIComponent(object[key])}`;
  });
  return params;
};

const getHttpRequestHeaders = (options: object = {}): Headers => {
  const headers = new Headers({
    Accept: 'application/json, text/plain, multipart/form-data, */*',
    'Content-Type': 'application/json; charset=UTF-8',
    ...options,
  });

  return headers;
};

export const executeHttpRequest = <T>({
  url: baseUrl,
  method,
  headers: customHeaders,
  body = {},
  queryParams = {},
}: IHttpRequestParams): IHttpResponseFetch<T> => {
  const url = `${baseUrl}${parseObjectToQs(queryParams)}`;
  try {
    const headers = getHttpRequestHeaders(customHeaders);
    const options: { method: string; headers: Headers; body?: string } = {
      method,
      headers,
    };

    if (['post', 'put'].includes(method?.toLowerCase())) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options).then((response) => response.json());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `Um erro foi disparado ao tentar realizar um ${method} para ${url}`,
      error
    );
    return null;
  }
};
