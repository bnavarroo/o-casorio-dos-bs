/* eslint-disable no-console */
/* eslint-disable indent */
import { Dispatch, SetStateAction } from 'react';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';
import { EVENT_CONFIG } from '@config/event';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { getGuestFromCookies } from '@utilities/guest';
import { IGuest } from '@shared/types/guest';

const randomString = (size = 8) => {
  let result = '';
  const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < size; i += 1) {
    result += c.charAt(Math.floor(Math.random() * c.length));
  }

  return result;
};

export const errorData = {
  title: 'Ops, algo de errado não está certo...',
  msg: `Parece que não conseguimos computar a sua resposta, mas não se preocupe! Tente novamente mais tarde ou caso o problema persista entre em contato conosco através do whatsapp ${EVENT_CONFIG.supportAppPhone}.`,
};

export const handleClickButton =
  (
    id: string,
    value: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<boolean>>
  ) =>
  async () => {
    setLoading(true);

    const guestFromCookies = getGuestFromCookies(null);
    const newGuest = { ...guestFromCookies, confirmed: value };
    const url = getEndpoint('guest', [id]);
    const body = {
      guest: newGuest,
    };

    const response = await executeHttpRequest<IGuest>({
      url,
      method: 'put',
      body,
    });

    if (!response?.error) {
      const { path, keys, maxAge } = COOKIES_CONFIG;
      setCookie(null, keys.guest, JSON.stringify(response?.data ?? newGuest), {
        maxAge,
        path,
      });

      const confirmToken = randomString();
      setCookie(null, keys.session, confirmToken, {
        maxAge: 60 * 15, // 15 minutos
        path,
      });

      setTimeout(() => {
        Router.push(`/success/${confirmToken}`);
      }, 2000);
    } else {
      setLoading(false);
      setError(true);
      console.error('Houve um erro inesperado:', response?.message);
    }
  };
