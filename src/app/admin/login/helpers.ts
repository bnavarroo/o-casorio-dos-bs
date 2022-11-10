/* eslint-disable indent */
import Router from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { IUser } from '@shared/types/user';

export const onSubmit =
  (
    setError: Dispatch<SetStateAction<string>>,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) =>
  async (data: object) => {
    setLoading(true);
    const url = getEndpoint('user');
    const response = await executeHttpRequest<IUser>({
      url,
      method: 'post',
      body: data,
    });

    if (!response?.error) {
      Router.push('/admin/home');
    } else {
      setLoading(false);
      setError(response.message as string);
    }
  };
