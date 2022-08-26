import styled, { css } from 'styled-components';
import { ContainerPage } from '@styles/ui/container';
import { FlexCentralized } from '@styles/ui/flex';

export const Header = styled(ContainerPage)``;

export const Wrapper = styled(FlexCentralized).attrs({ $direction: 'column' })`
  width: 100%;

  ${({ theme }) => css`
    font-size: 12px;
    height: ${theme.header.height.mobile};
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 14px;
      height: ${theme.header.height.desktop};
    }
  `}
`;

export const LinkWrapper = styled.div`
  position: relative;
  align-self: flex-end;

  a {
    position: absolute;
    top: 12px;
    right: 0;
    color: inherit;
    min-width: max-content;
    text-align: center;
    font-size: 1em;
  }
`;
