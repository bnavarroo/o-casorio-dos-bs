export type THttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface IHttpResponseHeaders {
  method: THttpMethod;
  headers: Headers;
}

export interface IHttpResponse<T> {
  error: boolean;
  message?: string;
  data?: T;
}

export type IHttpResponseFetch<T> = Promise<IHttpResponse<T>> | null;
