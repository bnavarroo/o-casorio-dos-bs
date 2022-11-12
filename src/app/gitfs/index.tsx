import { EVENT_CONFIG } from '@config/event';
import * as Styled from './styles';

const Gifts: React.FC = () => (
  <div>
    <Styled.Title>Lista de Presentes</Styled.Title>
    <Styled.Content>
      <div className="subtitle">Olá família e amigos!</div>
      <br /> Não sabemos qual é o segredo da felicidade, mas sabemos que estar
      em boa companhia enche o nosso coração dela. Sabemos também que sozinhos
      podemos ir bem, mas em boas companhias podemos ir muito melhor! Antes de
      prosseguirmos, nosso muito obrigado a cada um de vocês por fazerem parte
      de nossas vidas. É realmente muito especial vivenciar esse momento único
      rodeado de pessoas que amamos e queremos bem, e que sabemos também que a
      recíproca é verdadeira…
      <br />
      <br />
      <div className="subtitle">Pois bem, vamos falar dos presentes!</div>
      <br />É comum que listas de presentes sejam criadas em sites como Magazine
      Luiza, Havan, entre outros, com opções de produtos escolhidos pelos
      noivos. No nosso caso, já moramos juntos há mais de 7 anos e temos nosso
      nosso apartamento já todo mobiliado e com tudo que precisamos. Por esse
      motivo optamos por não criar uma lista de presentes em algum site, com
      produtos reais. Além dos valores serem fixos, não nos sentimos a vontade
      com o fato de não ficarmos com o presente que nos foi dado com tanto amor
      por vocês. <br />
      Já que o pix está na moda: E aí,&nbsp;
      <b className="subtitle">pode ser no PIX</b>?
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
