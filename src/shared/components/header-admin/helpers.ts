import Router from 'next/router';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { TSetState } from '@shared/types/_globals';

export const handleLogout = (setLoading: TSetState<boolean>) => async () => {
  setLoading(true);
  const url = getEndpoint('logout');
  const response = await executeHttpRequest<unknown>({
    url,
    method: 'post',
  });

  if (!response?.error) {
    Router.push('/admin/login');
  }
};
