/* eslint-disable indent */
import { ChangeEvent } from 'react';
import { IBaseFilter, ICurrentFilter, IFilter } from './types';

const getFilteredList = ({
  data,
  searchFilter,
  confirmedFilter,
  priorityFilter,
}: IBaseFilter) => {
  const filteredList = data?.filter(
    ({ id, name, internalName, confirmed, priority }) => {
      let condition = true;

      if (searchFilter) {
        condition =
          id?.toLowerCase()?.includes(searchFilter) ||
          name?.toLowerCase()?.includes(searchFilter) ||
          internalName?.toLowerCase()?.includes(searchFilter);
      }

      if (confirmedFilter === true || confirmedFilter === false) {
        condition = condition && confirmed === confirmedFilter;
      }

      if (priorityFilter && priorityFilter > 0) {
        condition = condition && priority === priorityFilter;
      }

      return condition;
    }
  );

  return filteredList;
};

const handleFilterBySearch = (
  e: ChangeEvent<HTMLFormElement>,
  {
    data,
    confirmedFilter,
    priorityFilter,
    setFilteredList,
    setStateCurrentFilter,
  }: ICurrentFilter
) => {
  e?.preventDefault();

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const { filterGuest } = formEntries;
  const formattedKey = filterGuest?.toString()?.toLowerCase();

  const filteredList = getFilteredList({
    data,
    searchFilter: formattedKey,
    confirmedFilter,
    priorityFilter,
  });

  setStateCurrentFilter(formattedKey ?? '');
  setFilteredList(filteredList);
};

const handleFilterBySelect = ({
  data,
  searchFilter,
  confirmedFilter,
  priorityFilter,
  type,
  setFilteredList,
  setStateCurrentFilter,
}: IFilter) => {
  const filteredList = getFilteredList({
    data,
    searchFilter,
    confirmedFilter,
    priorityFilter,
  });

  const currentFilter = type === 'confirm' ? confirmedFilter : priorityFilter;

  setStateCurrentFilter(currentFilter);
  setFilteredList(filteredList);
};

export const handleFilter = (
  e: ChangeEvent<HTMLFormElement> | ChangeEvent<HTMLSelectElement> | undefined,
  {
    data,
    searchFilter,
    confirmedFilter,
    priorityFilter,
    type,
    setFilteredList,
    setStateCurrentFilter,
  }: IFilter
) => {
  switch (type) {
    case 'search':
      return handleFilterBySearch(e as ChangeEvent<HTMLFormElement>, {
        data,
        confirmedFilter,
        priorityFilter,
        setFilteredList,
        setStateCurrentFilter,
      });
    case 'confirm':
    case 'priority':
      return handleFilterBySelect({
        data,
        searchFilter,
        confirmedFilter,
        priorityFilter,
        type,
        setFilteredList,
        setStateCurrentFilter,
      });
    default:
      return data;
  }
};

export const stringToBoolean = (s: string) => {
  if (s === 'undefined') {
    return undefined;
  }
  if (s === 'true') {
    return true;
  }

  return false;
};
