import { useEffect } from 'react';
import { setCookie } from 'nookies';
import { getEndpoint } from '@config/api';
import { COOKIES_CONFIG } from '@config/cookies';
import { useFetch } from '@utilities/hooks/use-fetch';
import { IGuest } from '@shared/types/guest';
import { fmtErrorData } from './helpers';

export const useGuest = (id: string, persistedGuest?: IGuest | null) => {
  const url = id && id !== persistedGuest?.id ? getEndpoint('guest', [id]) : '';
  const { response, loading } = useFetch<IGuest>(url);
  const {
    data,
    error,
    message,
    status = 0,
  } = response ?? { data: persistedGuest };

  useEffect(() => {
    const { maxAge, path, keys } = COOKIES_CONFIG;
    if (data) {
      setCookie(null, keys.guest, JSON.stringify(data), {
        maxAge,
        path,
      });
    }
  }, [data]);

  const { errorTitle, errorMessage } = fmtErrorData(status, message as string);

  return { guest: data, error, errorTitle, errorMessage, loading };
};
