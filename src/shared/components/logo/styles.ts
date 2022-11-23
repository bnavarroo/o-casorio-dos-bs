import styled, { css } from 'styled-components';
import { IStyledWrapperProps } from './types';

export const Wrapper = styled.div<IStyledWrapperProps>`
  ${({ theme, $widthDesktop, $widthMobile }) => css`
    width: 100%;
    max-width: ${$widthMobile};
    height: auto;

    @media (min-width: ${theme.breakpoints.tablet.min}) {
      max-width: ${$widthDesktop};
    }
  `}

  img {
    max-width: 100%;
  }
`;
