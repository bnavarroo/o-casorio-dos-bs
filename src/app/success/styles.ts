import styled, { css } from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Wrapper = styled(FlexCentralized).attrs({ $direction: 'column' })`
  margin-top: 20px;
  text-align: center;
  img {
    max-width: 100%;
    margin-top: 20px;
  }
`;

export const Msg = styled.p`
  ${({ theme }) => css`
    font-size: 24px;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 36px;
    }
  `}
`;
