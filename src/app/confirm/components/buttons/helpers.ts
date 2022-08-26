/* eslint-disable indent */
import { Dispatch, SetStateAction } from 'react';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { getGuestFromCookies } from '@utilities/guest';
import { COOKIES_CONFIG } from '@config/cookies';

const randomString = (size = 8) => {
  let result = '';
  const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < size; i += 1) {
    result += c.charAt(Math.floor(Math.random() * c.length));
  }

  return result;
};

export const handleClickButton =
  (id: string, value: number, setLoading: Dispatch<SetStateAction<boolean>>) =>
  () => {
    setLoading(true);

    // 1. atualizar cookie de guest
    const { path, keys, maxAge } = COOKIES_CONFIG;
    const guestFromCookies = getGuestFromCookies(null);
    const newGuest = { ...guestFromCookies, confirmed: value };
    setCookie(null, keys.guest, JSON.stringify(newGuest), {
      maxAge,
      path,
    });

    // 2. setar cookie novo
    const confirmToken = randomString();
    setCookie(null, keys.session, confirmToken, {
      maxAge: 60 * 15,
      path,
    });

    // 3. Setar os estados necessários(loading, data, error), fazer a requisição e o redirect

    // 4. TEMP: simular comportamento e fazer o redirect
    setTimeout(() => {
      Router.push(`/success/${confirmToken}`);
    }, 2000);
  };
