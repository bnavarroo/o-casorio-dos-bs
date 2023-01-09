import Router from 'next/router';
import { ChangeEvent } from 'react';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { IGuest } from '@shared/types/guest';

export const handleSubmit = async (
  e: ChangeEvent<HTMLFormElement>,
  isUpdate: boolean
) => {
  e.preventDefault();

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const { id, name, internalName, isChild, confirmed, priority } = formEntries;
  const data: IGuest = {
    id: id as string,
    name: name as string,
    internalName: internalName as string,
    isChild: isChild === 'true',
    confirmed: confirmed === 'true',
    priority: parseInt(priority as string, 10),
  };
  const method = isUpdate ? 'put' : 'post';
  const params = isUpdate ? [data.id] : [];
  const url = getEndpoint('guest', params as Array<string>);

  const response = await executeHttpRequest<IGuest>({
    url,
    method,
    body: data,
  });

  if (!response?.error) {
    Router.push('/admin/home');
  } else {
    // eslint-disable-next-line no-alert
    alert('Houve um erro ao processar a solicitação.');
    // eslint-disable-next-line no-console
    console.error(response.error);
  }
};
