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
    const id = (guestId as string)?.trim();
    const url = getEndpoint('guest', [id]);
    const response = await executeHttpRequest<IGuest>({
      url: `${url}?priority=1`,
      method: 'get',
    });
    if (!response?.error) {
      Router.push(`/confirm/${id}`);
    } else {
      setLoading(false);
      setNotFound(true);
    }
  } else {
    setNotFound(true);
  }
};
