import Router from 'next/router';

export const handleChangeReponse = (id: string) => () => {
  Router.push(`/confirm/${id}`);
};
