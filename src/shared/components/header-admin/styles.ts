import styled, { css } from 'styled-components';
import { ContainerPage } from '@styles/ui/container';
import { FlexCentralized } from '@styles/ui/flex';

export const Header = styled(ContainerPage)``;

export const Wrapper = styled(FlexCentralized).attrs({
  $direction: 'column',
})<{ $isLoggedIn: boolean }>`
  width: 100%;
  font-size: 12px;

  ${({ theme, $isLoggedIn }) => css`
    justify-content: center;

    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      flex-direction: row;
      justify-content: ${$isLoggedIn ? 'space-between' : 'center'};
    }
  `}
`;

export const LogoWrapper = styled(FlexCentralized).attrs({
  $direction: 'column',
})`
  ${({ theme }) => css`
    font-size: 26px;

    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      flex-direction: row;
      gap: 20px;
      font-size: 30px;
    }

    h1 {
      font-size: 1em;
    }
  `}
`;

export const UserWrapper = styled.div`
  font-size: 16px;
`;

export const LogoutLink = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: underline;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
  `}
`;
