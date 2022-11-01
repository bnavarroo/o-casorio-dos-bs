import image from '@assets/img/success_image_02.png';
import * as Styled from './styles';

export const SuccessComponent: React.FC = () => (
  <Styled.Wrapper>
    <Styled.Msg>Agradecemos sua resposta!</Styled.Msg>
    <picture>
      <source srcSet={image.src} type="image/webp" />
      <img src={image.src} alt="B & B" title="B & B" />
    </picture>
  </Styled.Wrapper>
);

export default SuccessComponent;
