import { EVENT_CONFIG } from '@config/event';
import * as Styled from './styles';

export const InfoComponent: React.FC = () => (
  <Styled.Wrapper>
    <div>
      <Styled.Title>Onde?</Styled.Title>
      <Styled.Text>{EVENT_CONFIG?.address}.</Styled.Text>
    </div>
    <div className="mt">
      <Styled.Title>Quando?</Styled.Title>
      <Styled.Text>{EVENT_CONFIG?.fullDate}.</Styled.Text>
    </div>
  </Styled.Wrapper>
);

export default InfoComponent;
