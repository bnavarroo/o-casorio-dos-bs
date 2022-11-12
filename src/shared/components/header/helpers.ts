import { TObjectMap } from '@shared/types/_globals';
import { IHeaderLinks } from './types';

const homeLink: IHeaderLinks = {
  link: '/',
  text: 'página inicial',
  target: '_self',
};

const faqLink: IHeaderLinks = {
  link: '/faq',
  text: 'dúvidas e ajuda',
  target: '_blank',
};

const giftsLink: IHeaderLinks = {
  link: '/gifts',
  text: 'lista de presentes',
  target: '_blank',
};

export const getHeaderLinks = (pathname: string) => {
  const headerLinks: TObjectMap<Array<IHeaderLinks>> = {
    faq: [homeLink, giftsLink],
    gifts: [homeLink, faqLink],
    default: [faqLink, giftsLink],
  };
  const page = pathname.replace(/[^a-zA-Z0-9 ]/g, '');

  return headerLinks[page] ?? headerLinks.default;
};
