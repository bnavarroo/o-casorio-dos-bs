import styled, { css } from 'styled-components';
import { FlexWrapper } from '@styles/ui/flex';
import { IProps } from './types';

export const ContainerTemplate = styled(FlexWrapper).attrs({
  $direction: 'column',
})`
  justify-content: space-between;
  width: 100%;
  min-height: 99.8vh;
`;

export const ContainerPage = styled.div<IProps>`
  width: 100%;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  ${({ theme, $full }) =>
    !$full &&
    css`
      margin-left: auto;
      margin-right: auto;
      @media (min-width: ${theme.breakpoints.tablet.min}) {
        max-width: ${theme.breakpoints.tablet.min};
      }
      @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
        max-width: ${theme.breakpoints.desktopSmall.min};
      }
      @media (min-width: ${theme.breakpoints.desktop.min}) {
        max-width: ${theme.breakpoints.desktop.min};
      }
    `}
`;

export default ContainerPage;
