import styled, { css } from 'styled-components';
import { ContainerPage } from '@styles/ui/container';
import { FlexWrapper } from '@styles/ui/flex';

export const Container = styled(FlexWrapper).attrs({ $direction: 'column' })`
  justify-content: space-between;
  width: 100%;
  min-height: 99.8vh;
`;

export const Wrapper = styled(ContainerPage)`
  box-sizing: border-box;
  padding-bottom: 64px;
  ${({ theme }) => css`
    min-height: calc(
      100vh - ${theme.header.height.mobile} - ${theme.footer.height.mobile}
    );
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      min-height: calc(
        100vh - ${theme.header.height.desktop} - ${theme.footer.height.desktop}
      );
    }
  `}
`;
