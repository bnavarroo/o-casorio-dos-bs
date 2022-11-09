import client from '@utilities/client';
import { encrypt } from '@utilities/crypto';
import { IUser, IUserModel } from '@shared/types/user';

export const createUser = async (
  name: string,
  username: string,
  password: string
) => {
  const encryptedPassword = encrypt(password);

  const user: IUserModel | null = await client.user.create({
    data: {
      name,
      username,
      password: encryptedPassword,
    },
  });

  if (user) {
    return {
      id: 1,
      name: user?.name,
      username: user?.username,
      isLoggedIn: false,
    };
  }

  return null;
};

export const getUser = async (username: string, password: string) => {
  const encryptedPassword = encrypt(password);
  const user: IUserModel | null = await client.user.findFirst({
    where: {
      username,
      password: encryptedPassword,
    },
  });

  if (user) {
    return {
      name: user?.name,
      username: user?.username,
      isLoggedIn: !!user,
    } as IUser;
  }

  return null;
};
