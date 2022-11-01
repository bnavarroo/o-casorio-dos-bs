import { IServerProps } from './_globals';

export interface IGuestModel {
  id: string;
  name: string;
  confirmed: boolean;
  updatedAt?: Date;
}

export interface IGuest {
  id: string;
  name: string;
  confirmed: boolean;
  updatedAt?: string;
}

export interface IPersistedGuest {
  persistedGuest?: IGuest | null;
}

export interface IGuestProps extends IPersistedGuest {
  id?: string;
}
export type TGuestFromServer = IServerProps<IGuestProps>;
