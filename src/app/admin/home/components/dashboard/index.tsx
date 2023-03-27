import { IGuest } from '@shared/types/guest';
import { getDahsboardData } from './helpers';
import * as Styled from './styles';

const HomeDashboardComponent: React.FC<{ guestList: Array<IGuest> }> = ({
  guestList,
}) => {
  const {
    totalAdults,
    totalPayingChildren,
    totalFreeChildren,
    totalMainPriority,
    totalConfirmed,
    totalNotConfirmed,
  } = getDahsboardData(guestList);
  return (
    <Styled.Wrapper>
      <Styled.Card as="li">
        <p>Prioridade 1</p>
        {totalMainPriority}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Adultos</p>
        {totalAdults}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Crianças Pagantes</p>
        {totalPayingChildren}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Crianças Não Pagantes</p>
        {totalFreeChildren}
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
