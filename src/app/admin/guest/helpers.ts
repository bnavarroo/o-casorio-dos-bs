import Router from 'next/router';
import { ChangeEvent } from 'react';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { IGuest } from '@shared/types/guest';
import { TSetState } from '@shared/types/_globals';

export const handleSubmit = async (
  e: ChangeEvent<HTMLFormElement>,
  isUpdate: boolean,
  setLoading: TSetState<boolean>
) => {
  e.preventDefault();
  setLoading(true);

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const {
    id,
    name,
    internalName,
    isChild,
    confirmed,
    priority,
    age,
    isActive,
  } = formEntries;
  const data: IGuest = {
    id: id as string,
    name: name as string,
    internalName: internalName as string,
    isChild: isChild === 'true',
    confirmed: confirmed === 'true',
    priority: parseInt(priority as string, 10),
    age: (age as string)?.length > 0 ? parseInt(age as string, 10) : null,
    isActive: isActive === 'true',
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
    setLoading(false);
    // eslint-disable-next-line no-alert
    alert('Houve um erro ao processar a solicitação.');
    // eslint-disable-next-line no-console
    console.error(response.error);
  }
};
