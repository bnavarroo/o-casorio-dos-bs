import Link from 'next/link';
import { withLoader } from '@utilities/hoc/with-loader';
import { IInjectedProps } from '@utilities/hoc/with-loader/types';
import * as Styled from './styles';

const Home: React.FC<IInjectedProps> = ({ setLoading }) => (
  <div>
    <Styled.Title>
      Olá, seja bem vindo ao portal do casamento da <b>Bruna & Bruno</b>!
    </Styled.Title>
    <Styled.OptionsWrapper as="ul">
      <li>
        <Link href="/search">
          <Styled.ContentOption onClick={() => setLoading(true)}>
            Confirmar <p>Presença</p>
          </Styled.ContentOption>
        </Link>
      </li>
      <li>
        <Link href="/gifts">
          <Styled.ContentOption onClick={() => setLoading(true)}>
            Lista de <p>Presentes</p>
          </Styled.ContentOption>
        </Link>
      </li>
    </Styled.OptionsWrapper>
  </div>
);

export default withLoader(Home);
