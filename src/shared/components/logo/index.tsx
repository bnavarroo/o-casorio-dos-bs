import { memo } from 'react';
import logo from '@assets/img/logo.png';
import * as Styled from './styles';

const titleAttr = 'Casamento Bruno & Bruna';

export const LogoComponent: React.FC = () => (
  <Styled.Wrapper>
    <picture>
      <source srcSet={logo.src} type="image/webp" />
      <img src={logo.src} alt={titleAttr} title={titleAttr} />
    </picture>
  </Styled.Wrapper>
);

export default memo(LogoComponent);
