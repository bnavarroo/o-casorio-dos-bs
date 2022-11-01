import { memo } from 'react';
import * as Styled from './styles';

export const FooterComponent: React.FC = () => (
  <Styled.Footer as="footer">
    <div>Casamento Bruno & Bruna © 2023 - Save the Date!</div>
    <div>
      desenvolvido por&nbsp;
      <a
        href="https://www.linkedin.com/in/bruno-navarro-oliveira/"
        target="_blank"
        rel="noreferrer"
      >
        Bruno Navarro
      </a>
    </div>
  </Styled.Footer>
);

export default memo(FooterComponent);
