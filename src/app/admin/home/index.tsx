import { useState } from 'react';
import { IGuest } from '@shared/types/guest';
import FilterGuest from './components/filter';
import TableGuest from './components/table';
import { IProps } from './types';
import * as Styled from './styles';

const getTotalConfirmed = (data: Array<IGuest>) =>
  data?.filter(({ confirmed }) => confirmed === true)?.length ?? 0;

const getTotalChild = (data: Array<IGuest>) =>
  data?.filter(({ isChild }) => isChild === true)?.length ?? 0;

const AdmHome: React.FC<IProps> = ({ guestList }) => {
  const [filteredList, setFilteredList] = useState(guestList);
  const totalConfirmed = getTotalConfirmed(guestList);
  const totalChild = getTotalChild(guestList);

  return (
    <>
      <Styled.Title>Lista de Convidados</Styled.Title>
      <Styled.FilterWrapper>
        <FilterGuest data={guestList} setFilteredList={setFilteredList} />
        <Styled.NewButton>Inserir Novo Convidado</Styled.NewButton>
      </Styled.FilterWrapper>
      <TableGuest
        data={filteredList}
        totalItems={guestList?.length}
        totalConfirmed={totalConfirmed}
        totalChild={totalChild}
      />
    </>
  );
};

export default AdmHome;
