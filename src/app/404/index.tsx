import image from '@assets/img/404_image.png';
import * as Styled from './styles';

export const NotFoundComponent: React.FC = () => (
  <Styled.Wrapper>
    <div>
      <Styled.Title>Ooops!</Styled.Title>
      <Styled.Text>Conteúdo não encontrado.</Styled.Text>
      <Styled.Link href="/">
        <Styled.Arrow /> Voltar para confirmação
      </Styled.Link>
    </div>
    <picture>
      <source srcSet={image.src} type="image/webp" />
      <img
        src={image.src}
        alt="Conteúdo não encontrado"
        title="Conteúdo não encontrado"
      />
    </picture>
  </Styled.Wrapper>
);

export default NotFoundComponent;
