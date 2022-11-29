import { useState, ChangeEvent } from 'react';
import { Input, InputWrapperButton } from '@styles/ui/input';
import SearchIcon from '@assets/img/search-icon.svg';
import { IProps } from './types';
import {
  handleFilterBySearch,
  handleFilterByConfirmed,
  fmtShowValue,
} from './helpers';
import * as Styled from './styles';

const FilterGuest: React.FC<IProps> = ({ data, setFilteredList }) => {
  const [confirmedFilter, setConfirmedFilter] = useState<boolean | undefined>();
  const [searchFilter, setSearchFilter] = useState<string>('');

  return (
    <>
      <Styled.Form
        as="form"
        onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
          handleFilterBySearch(e, {
            data,
            confirmedFilter,
            setFilteredList,
            setSearchFilter,
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
      <Styled.ShowWrapper>
        <p>Visualizar:</p>
        <select
          name="show"
          id="show"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleFilterByConfirmed({
              data,
              confirmedFilter: fmtShowValue(e?.target?.value),
              searchFilter,
              setFilteredList,
              setConfirmedFilter,
            })
          }
        >
          <option value="undefined">Todos</option>
          <option value="true">Somente confirmados</option>
          <option value="false">Somente não confirmados</option>
        </select>
      </Styled.ShowWrapper>
    </>
  );
};

export default FilterGuest;
