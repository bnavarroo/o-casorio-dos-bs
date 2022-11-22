import styled, { css } from 'styled-components';
import { ContainerPage } from '@styles/ui/container';
import { FlexWrapper, FlexCentralized } from '@styles/ui/flex';

export const Header = styled(ContainerPage)``;

export const Wrapper = styled(FlexCentralized).attrs({ $direction: 'column' })`
  width: 100%;
  font-size: 12px;
`;

export const LinkContainer = styled.div`
  position: relative;
  align-self: center;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      align-self: flex-end;
    }
  `}
`;

export const LinkWrapper = styled(FlexWrapper)`
  gap: 15px;
  padding-top: 20px;
  padding-bottom: 10px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      position: absolute;
      top: 12px;
      right: 0;
      padding-top: 0px;
      padding-bottom: 0px;
    }
  `}

  a {
    color: inherit;
    min-width: max-content;
    text-align: center;
    font-size: 1.2em;
  }
`;
