import { IServerProps } from './_globals';

interface IGuestBase {
  id: string;
  name: string;
  internalName: string;
  isChild: boolean;
  confirmed: boolean;
  priority: number;
  age: number | null;
  isActive: boolean;
}

export interface IGuestModel extends IGuestBase {
  updatedAt?: Date;
}

export interface IGuest extends IGuestBase {
  updatedAt?: string;
}

export interface IPersistedGuest {
  persistedGuest?: IGuest | null;
}

export interface IGuestProps extends IPersistedGuest {
  id?: string;
}
export type TGuestFromServer = IServerProps<IGuestProps>;
