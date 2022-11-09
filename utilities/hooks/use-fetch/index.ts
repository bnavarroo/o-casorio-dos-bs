import useSWR from 'swr';
import { executeHttpRequest } from '@utilities/http';
import { IHttpResponse } from '@utilities/http/types';

export const useFetch = <T = unknown>(url: string) => {
  const fetcher = async (urlToFetch: string) => {
    const response = await executeHttpRequest<T>({
      url: urlToFetch,
      method: 'get',
    });
    return response as IHttpResponse<T>;
  };

  const { data, error } = useSWR<IHttpResponse<T>>(url, fetcher, {
    revalidateOnFocus: false,
  });

  return { response: data, error, loading: url && !data };
};
