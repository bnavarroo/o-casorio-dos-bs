import { useState, ChangeEvent } from 'react';
import { Input, InputWrapperButton } from '@styles/ui/input';
import SearchIcon from '@assets/img/search-icon.svg';
import { IProps, TStateFilter } from './types';
import { handleFilter, stringToBoolean } from './helpers';
import * as Styled from './styles';

const FilterGuest: React.FC<IProps> = ({ data, setFilteredList }) => {
  const [confirmedFilter, setConfirmedFilter] = useState<boolean | undefined>();
  const [priorityFilter, setPriorityFilter] = useState<number>();
  const [searchFilter, setSearchFilter] = useState<string>('');

  return (
    <>
      <Styled.Form
        as="form"
        onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
          handleFilter(e, {
            data,
            confirmedFilter,
            priorityFilter,
            type: 'search',
            setFilteredList,
            setStateCurrentFilter: setSearchFilter as TStateFilter,
          })
        }
      >
        <label htmlFor="filterGuest">Encontrar na lista:</label>
        <InputWrapperButton $width="300px">
          <Input
            type="text"
            name="filterGuest"
            id="filterGuest"
            $borderColor="transparent"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </InputWrapperButton>
      </Styled.Form>
      <Styled.SelectsWrapper>
        <div>
          <p>Visualizar:</p>
          <select
            name="show"
            id="show"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleFilter(e, {
                data,
                searchFilter,
                confirmedFilter: stringToBoolean(e?.target?.value),
                priorityFilter,
                type: 'confirm',
                setFilteredList,
                setStateCurrentFilter: setConfirmedFilter as TStateFilter,
              })
            }
          >
            <option value="undefined">Todos</option>
            <option value="true">Somente confirmados</option>
            <option value="false">Somente não confirmados</option>
          </select>
        </div>
        <div>
          <p>Prioridade:</p>
          <select
            name="priority"
            id="priority"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleFilter(e, {
                data,
                searchFilter,
                confirmedFilter,
                priorityFilter: parseInt(e?.target?.value, 10),
                type: 'priority',
                setFilteredList,
                setStateCurrentFilter: setPriorityFilter as TStateFilter,
              })
            }
          >
            <option value="0">Todos</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </Styled.SelectsWrapper>
    </>
  );
};

export default FilterGuest;
