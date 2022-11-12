import { EVENT_CONFIG } from '@config/event';
import * as Styled from './styles';

const Gifts: React.FC = () => (
  <div>
    <Styled.Title>Lista de Presentes</Styled.Title>
    <Styled.Content>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur?
    </Styled.Content>
    <Styled.PixBox>
      <span>Nossas chaves pix são:</span>
      {EVENT_CONFIG.pixKeys.map(({ key, name }) => (
        <div key={key}>
          <Styled.PixValue>{key}</Styled.PixValue>
          <Styled.PixName>{name}</Styled.PixName>
        </div>
      ))}
    </Styled.PixBox>
    <Styled.BottomMsg>
      Agradecemos a todos pelo amor e carinho! ♥
    </Styled.BottomMsg>
  </div>
);

export default Gifts;
