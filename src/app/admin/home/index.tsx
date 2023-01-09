import { useState } from 'react';
import HomeDashboard from './components/dashboard';
import FilterGuest from './components/filter';
import TableGuest from './components/table';
import { IProps } from './types';
import * as Styled from './styles';

const AdmHome: React.FC<IProps> = ({ guestList }) => {
  const [filteredList, setFilteredList] = useState(guestList);

  return (
    <>
      <Styled.Title>Lista de Convidados</Styled.Title>
      <HomeDashboard guestList={guestList} />
      <Styled.FilterWrapper>
        <FilterGuest data={guestList} setFilteredList={setFilteredList} />
        <Styled.NewButton as="a" href="/admin/guest/new">
          Inserir Novo Convidado
        </Styled.NewButton>
      </Styled.FilterWrapper>
      <TableGuest data={filteredList} totalItems={guestList?.length} />
    </>
  );
};

export default AdmHome;
