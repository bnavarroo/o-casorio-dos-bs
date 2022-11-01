import { useEffect } from 'react';
import { setCookie } from 'nookies';
import { getEndpoint } from '@config/api';
import { COOKIES_CONFIG } from '@config/cookies';
import { useFetch } from '@utilities/hooks/use-fetch';
import { IGuest } from '@shared/types/guest';

export const useGuest = (id: string, persistedGuest?: IGuest | null) => {
  const url = id && id !== persistedGuest?.id ? getEndpoint('guest', [id]) : '';
  const { response, loading } = useFetch<IGuest>(url);
  const { data, error, message } = response ?? { data: persistedGuest };

  useEffect(() => {
    const { maxAge, path, keys } = COOKIES_CONFIG;
    if (data) {
      setCookie(null, keys.guest, JSON.stringify(data), {
        maxAge,
        path,
      });
    }
  }, [data]);

  return { guest: data, error, message, loading };
};
