import { TStringMap, TObjectMap } from '@shared/types/_globals';

export type THttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface IHttpResponse<T> {
  error: boolean;
  message?: string;
  data?: T;
}

export type IHttpResponseFetch<T> = Promise<IHttpResponse<T>> | null;

export interface IHttpRequestParams {
  url: string;
  method: THttpMethod;
  headers?: TStringMap;
  body?: TStringMap | TObjectMap | object;
  queryParams?: TStringMap;
}
