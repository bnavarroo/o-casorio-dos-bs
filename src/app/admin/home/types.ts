import { IServerProps } from '@shared/types/_globals';
import { IUser } from '@shared/types/user';
import { IGuest } from '@shared/types/guest';

export type TSSRProps = IServerProps<{
  user?: IUser;
  guestList: Array<IGuest>;
}>;

export interface IProps {
  guestList: Array<IGuest>;
}
