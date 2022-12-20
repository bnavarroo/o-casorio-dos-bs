import { guests } from '@mocks/guests';
import * as Styled from './styles';

const Invites: React.FC = () => (
  <Styled.List>
    {guests?.map(({ id, name }) => (
      <li>
        <Styled.Content>
          <p>{name}</p>
          <div className="confirmation-wrapper">
            <p>
              <b>Código de Confirmação:</b>
            </p>
            <p className="confirmation-code">{id}</p>
          </div>
        </Styled.Content>
      </li>
    ))}
  </Styled.List>
);

export default Invites;
