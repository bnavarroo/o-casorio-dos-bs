import { IGuest } from '@shared/types/guest';
import { getDahsboardData } from './helpers';
import * as Styled from './styles';

const HomeDashboardComponent: React.FC<{ guestList: Array<IGuest> }> = ({
  guestList,
}) => {
  const { total, totalAdults, totalChild, totalConfirmed, totalNotConfirmed } =
    getDahsboardData(guestList);
  return (
    <Styled.Wrapper>
      <Styled.Card as="li">
        <p>Total de Convidados</p>
        {total}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Adultos</p>
        {totalAdults}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Crianças</p>
        {totalChild}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Confirmados</p>
        {totalConfirmed}
      </Styled.Card>
      <Styled.Card as="li">
        <p>NÃO Confirmados</p>
        {totalNotConfirmed}
      </Styled.Card>
    </Styled.Wrapper>
  );
};

export default HomeDashboardComponent;
