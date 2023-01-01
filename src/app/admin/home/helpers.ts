import { getGuestList } from '@utilities/client/guest';
import { TNextCtx } from '@shared/types/_globals';
import { TSSRProps } from './types';

export const getSSRProps = async (ctx?: TNextCtx): Promise<TSSRProps> => {
  const user = ctx?.req?.session?.user;
  const guestList = await getGuestList();

  return {
    serverProps: {
      user,
      guestList,
    },
  };
};
