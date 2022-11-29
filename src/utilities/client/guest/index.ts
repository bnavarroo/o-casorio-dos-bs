import client from '@utilities/client';
import { IGuest, IGuestModel } from '@shared/types/guest';
import { fmtDateToModel, fmtDateToUI } from '@utilities/datetime';

const fmtGuestReturned = (guest: IGuest | IGuestModel | null) => {
  if (guest) {
    return {
      ...guest,
      updatedAt: fmtDateToUI(guest?.updatedAt as Date),
    };
  }

  return null;
};

export const getGuestList = async () => {
  const guests: Array<IGuestModel> = await client.guest.findMany({
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  });
  const formattedGuests = guests?.map(fmtGuestReturned);
  return formattedGuests as Array<IGuest>;
};

export const getGuest = async (id: string) => {
  const guest: IGuestModel | null = await client.guest.findUnique({
    where: {
      id,
    },
  });

  return fmtGuestReturned(guest);
};

export const updateGuest = async (id: string, guest: IGuestModel) => {
  const updatedGuest: IGuestModel | null = await client.guest.update({
    where: {
      id,
    },
    data: {
      ...guest,
      updatedAt: fmtDateToModel(new Date()),
    },
  });

  return fmtGuestReturned(updatedGuest) as IGuest;
};
