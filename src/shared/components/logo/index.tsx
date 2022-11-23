import { memo } from 'react';
import logo from '@assets/img/logo.png';
import { IProps } from './types';
import * as Styled from './styles';

const titleAttr = 'Casamento Bruno & Bruna';

export const LogoComponent: React.FC<IProps> = ({
  widthDesktop = '240px',
  widthMobile = '200px',
}) => (
  <Styled.Wrapper $widthDesktop={widthDesktop} $widthMobile={widthMobile}>
    <picture>
      <source srcSet={logo.src} type="image/webp" />
      <img src={logo.src} alt={titleAttr} title={titleAttr} />
    </picture>
  </Styled.Wrapper>
);

export default memo(LogoComponent);
