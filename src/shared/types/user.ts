import { IServerProps } from './_globals';

export interface IUserModel {
  id: number;
  name: string;
  username: string;
  password: string;
}

export interface IUser {
  name: string;
  username: string;
  isLoggedIn?: boolean;
}

export type TUserFromServer = IServerProps<{ user: IUser }>;
