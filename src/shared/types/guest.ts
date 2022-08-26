import { IServerProps, TBinary } from './_globals';

export interface IGuest {
  id: string;
  name: string;
  confirmed?: TBinary;
  updatedAt?: string;
}

export interface IPersistedGuest {
  persistedGuest?: IGuest | null;
}

export interface IGuestProps extends IPersistedGuest {
  id?: string;
}
export type TGuestFromServer = IServerProps<IGuestProps>;
