import { getGuestList } from '@utilities/client/guest';
import { TSSRProps } from './types';

export const getSSRProps = async (): Promise<TSSRProps> => {
  const guestList = await getGuestList();
  return {
    serverProps: {
      guestList,
    },
  };
};
