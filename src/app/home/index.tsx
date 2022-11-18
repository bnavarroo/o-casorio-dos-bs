import Link from 'next/link';
import * as Styled from './styles';

const Home: React.FC = () => (
  <div>
    <Styled.Title>
      Olá, seja bem vindo ao portal do casamento da <b>Bruna & Bruno</b>!
    </Styled.Title>
    <Styled.OptionsWrapper as="ul">
      <li>
        <Link href="/search">
          <Styled.ContentOption>
            Confirmar <p>Presença</p>
          </Styled.ContentOption>
        </Link>
      </li>
      <li>
        <Link href="/gifts">
          <Styled.ContentOption>
            Lista de <p>Presentes</p>
          </Styled.ContentOption>
        </Link>
      </li>
    </Styled.OptionsWrapper>
  </div>
);

export default Home;
