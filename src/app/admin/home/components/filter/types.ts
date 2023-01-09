import { TSetState } from '@shared/types/_globals';
import { IGuest } from '@shared/types/guest';

export type TStateFilter = TSetState<boolean | number | string | undefined>;

type TFilterType = 'search' | 'confirm' | 'priority';

export interface IProps {
  data: Array<IGuest>;
  setFilteredList: TSetState<Array<IGuest>>;
}

export interface IBaseFilter {
  data: Array<IGuest>;
  searchFilter?: string;
  confirmedFilter?: boolean;
  priorityFilter?: number;
}

export interface ICurrentFilter extends IBaseFilter {
  setFilteredList: TSetState<Array<IGuest>>;
  setStateCurrentFilter: TStateFilter;
}

export interface IFilter extends ICurrentFilter {
  type: TFilterType;
}
