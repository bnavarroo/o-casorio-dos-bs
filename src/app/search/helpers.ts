import Router from 'next/router';
import { ChangeEvent } from 'react';
import { getEndpoint } from '@config/api';
import { executeHttpRequest, parseObjectToQs } from '@utilities/http';
import { TSetState, TStringMap } from '@shared/types/_globals';
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
    const qs = parseObjectToQs({
      priority: 1,
      isActive: true,
    } as unknown as TStringMap);
    const response = await executeHttpRequest<IGuest>({
      url: `${url}${qs}`,
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
