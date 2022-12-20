import { IServerProps } from '@shared/types/_globals';
import { IGuest } from '@shared/types/guest';

export interface IProps {
  guestList: Array<IGuest>;
}
export type TSSRProps = IServerProps<IProps>;
