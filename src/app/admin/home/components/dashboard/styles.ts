import styled, { css } from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 15px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const Card = styled(FlexCentralized).attrs({ $direction: 'column' })`
  font-size: 26px;
  border: 1px solid;
  padding: 10px;
  text-align: center;

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
