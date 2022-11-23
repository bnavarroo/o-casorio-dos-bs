import { IUser } from '@shared/types/user';

export interface IProps {
  children: React.ReactNode;
  user?: IUser;
}
