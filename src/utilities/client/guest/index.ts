import client from '@utilities/client';
import { IGuest, IGuestModel } from '@shared/types/guest';
import { fmtDateToModel } from '@utilities/datetime';

export const getGuestList = async () => {
  const guests: Array<IGuestModel> = await client.guest.findMany();
  return guests as Array<IGuest>;
};

export const getGuest = async (id: string) => {
  const guest: IGuestModel | null = await client.guest.findUnique({
    where: {
      id,
    },
  });
  return guest as IGuest;
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
  return updatedGuest as IGuest;
};
