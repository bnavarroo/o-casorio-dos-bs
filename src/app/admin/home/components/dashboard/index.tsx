import { IGuest } from '@shared/types/guest';
import { getDahsboardData } from './helpers';
import * as Styled from './styles';

const HomeDashboardComponent: React.FC<{ guestList: Array<IGuest> }> = ({
  guestList,
}) => {
  const {
    totalMainPriority,
    totalAdults,
    totalChild,
    totalConfirmed,
    totalNotConfirmed,
  } = getDahsboardData(guestList);
  return (
    <Styled.Wrapper>
      <Styled.Card as="li">
        <p>Lista Principal</p>
        {totalMainPriority}
      </Styled.Card>
      <Styled.Card as="li">
        <p>+10 anos</p>
        {totalAdults}
      </Styled.Card>
      <Styled.Card as="li">
        <p>Crianças (-10 anos)</p>
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
