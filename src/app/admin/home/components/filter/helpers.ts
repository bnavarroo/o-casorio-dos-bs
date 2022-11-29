/* eslint-disable indent */
import { ChangeEvent } from 'react';
import {
  IFilterProps,
  IHandleFilterBySearchProps,
  IHandleFilterByConfirmedProps,
} from './types';

const getFilteredList = ({
  searchFilter,
  data,
  confirmedFilter,
}: IFilterProps) => {
  const filteredList = data?.filter(({ id, name, internalName, confirmed }) => {
    let condition = true;
    if (searchFilter) {
      condition =
        id?.toLowerCase()?.includes(searchFilter) ||
        name?.toLowerCase()?.includes(searchFilter) ||
        internalName?.toLowerCase()?.includes(searchFilter);
    }

    return confirmedFilter === true || confirmedFilter === false
      ? condition && confirmed === confirmedFilter
      : condition;
  });

  return filteredList;
};

export const handleFilterBySearch = (
  e: ChangeEvent<HTMLFormElement>,
  {
    data,
    confirmedFilter,
    setFilteredList,
    setSearchFilter,
  }: IHandleFilterBySearchProps
) => {
  e?.preventDefault();

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const { filterGuest } = formEntries;
  const formattedKey = filterGuest?.toString()?.toLowerCase();

  const filteredList = getFilteredList({
    searchFilter: formattedKey,
    data,
    confirmedFilter,
  });

  setSearchFilter(formattedKey ?? '');
  setFilteredList(filteredList);
};

export const handleFilterByConfirmed = ({
  data,
  confirmedFilter,
  searchFilter,
  setFilteredList,
  setConfirmedFilter,
}: IHandleFilterByConfirmedProps) => {
  const filteredList = getFilteredList({
    searchFilter,
    data,
    confirmedFilter,
  });

  setConfirmedFilter(confirmedFilter);
  setFilteredList(filteredList);
};

export const fmtShowValue = (s: string) => {
  if (s === 'undefined') {
    return undefined;
  }
  if (s === 'true') {
    return true;
  }

  return false;
};
