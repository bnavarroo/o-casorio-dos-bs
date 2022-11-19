/* eslint-disable prettier/prettier */
import Router from 'next/router';
import { guestLogout } from '@utilities/guest';
import { TSetState } from '@shared/types/_globals';

export const handleChangeReponse = (id: string) => () => {
  Router.push(`/confirm/${id}`);
};

export const handleNewConfirm =
  (
    redirectTo: string,
    setLoading: TSetState<boolean>
  ) => (): void => {
    setLoading(true);
    guestLogout(redirectTo);
  };
