import styled from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Wrapper = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const Title = styled(FlexCentralized).attrs({ $direction: 'column' })`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 25px;

  button {
    cursor: pointer;
    text-decoration: underline;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 5px;
  }
`;

export const Message = styled.p`
  display: table;
  margin: 0 auto;
  width: 100%;
  max-width: 780px;
  font-size: 1.1em;
  line-height: 1.25em;
  font-weight: 300;

  .first-line {
    font-weight: 400;
    line-height: 2em;
  }
`;

export const WarningMessage = styled.p`
  font-size: 0.75em;
  margin-top: 20px;
`;
