import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';

export const logout = (id?: string): void => {
  const { keys, path } = COOKIES_CONFIG;
  destroyCookie(null, keys.guest, { path });
  setTimeout(() => {
    const url = id ? `/?id=${id}` : '/';
    Router.push(url);
  }, 1000);
};

export const handleLogout = () => (): void => logout();

export const getMessage = (confirmed: number) =>
  [
    'Iremos nos casar e seria uma honra e satisfação imensa ter você conosco nesse momento tão especial das nossas vidas!',
    '<span class="first-line">Dia <b>29/04/2023</b> promete hein!?</span> <br /> Nesse momento sua presença está confirmada. Caso não possa comparecer por algum motivo, clique no botão abaixo para cancelar a confirmação.',
  ][confirmed] ?? '';
