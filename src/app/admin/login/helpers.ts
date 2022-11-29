/* eslint-disable indent */
import Router from 'next/router';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { TSetState } from '@shared/types/_globals';
import { IUser } from '@shared/types/user';

export const onSubmit =
  (setError: TSetState<string>, setLoading: TSetState<boolean>) =>
  async (data: object) => {
    setLoading(true);
    const url = getEndpoint('login');
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
