import { TSetState } from '@shared/types/_globals';

export interface IInjectedProps {
  loading: boolean;
  setLoading: TSetState<boolean>;
}
