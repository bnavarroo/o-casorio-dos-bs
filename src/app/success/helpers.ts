/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';
import Router from 'next/router';
import { guestLogout } from '@utilities/guest';

export const handleChangeReponse = (id: string) => () => {
  Router.push(`/confirm/${id}`);
};

export const handleNewConfirm =
  (
    redirectTo: string,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => (): void => {
    setLoading(true);
    guestLogout(redirectTo);
  };
