import Router from 'next/router';
import { ChangeEvent } from 'react';
import { getEndpoint } from '@config/api';
import { executeHttpRequest } from '@utilities/http';
import { TSetState } from '@shared/types/_globals';
import { IGuest } from '@shared/types/guest';

export const handleSubmit = async (
  e: ChangeEvent<HTMLFormElement>,
  setLoading: TSetState<boolean>,
  setNotFound: TSetState<boolean>
) => {
  e.preventDefault();

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const { guestId } = formEntries;
  if (guestId) {
    setLoading(true);
    const url = getEndpoint('guest', [guestId as string]);
    const response = await executeHttpRequest<IGuest>({
      url,
      method: 'get',
    });
    if (!response?.error) {
      Router.push(`/confirm/${guestId}`);
    } else {
      setLoading(false);
      setNotFound(true);
    }
  } else {
    setNotFound(true);
  }
};
