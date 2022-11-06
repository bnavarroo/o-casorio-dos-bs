import client from '@utilities/client';
import { encrypt } from '@utilities/crypto';
import { IUserModel } from '@shared/types/user';

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
    };
  }

  return null;
};
