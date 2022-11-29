import { TSetState } from '@shared/types/_globals';
import { IGuest } from '@shared/types/guest';

export interface IProps {
  data: Array<IGuest>;
  setFilteredList: TSetState<Array<IGuest>>;
}

interface IBaseFilter {
  data: Array<IGuest>;
  confirmedFilter?: boolean;
}

export interface IFilterProps extends IBaseFilter {
  searchFilter?: string;
}

export interface IHandleFilterBySearchProps extends IBaseFilter {
  setFilteredList: TSetState<Array<IGuest>>;
  setSearchFilter: TSetState<string>;
}

export interface IHandleFilterByConfirmedProps extends IFilterProps {
  setFilteredList: TSetState<Array<IGuest>>;
  setConfirmedFilter: TSetState<boolean | undefined>;
}
