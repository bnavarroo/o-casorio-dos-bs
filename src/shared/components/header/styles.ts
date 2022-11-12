import styled, { css } from 'styled-components';
import { ContainerPage } from '@styles/ui/container';
import { FlexWrapper, FlexCentralized } from '@styles/ui/flex';

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

export const LinkContainer = styled.div`
  position: relative;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      align-self: flex-end;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  `}
`;

export const LinkWrapper = styled(FlexWrapper)`
  gap: 15px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      position: absolute;
      top: 12px;
      right: 0;
    }
  `}

  a {
    color: inherit;
    min-width: max-content;
    text-align: center;
    font-size: 1.2em;
  }
`;
