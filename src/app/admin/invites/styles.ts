import styled from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fff;
  padding: 20px;

  li {
    padding: 3px;
  }
`;

export const Content = styled(FlexCentralized).attrs({ $direction: 'column' })`
  font-size: 16px;
  border: 2px solid;
  padding: 10px;
  text-align: center;
  height: 140px;
  margin-bottom: 40px;

  .confirmation-wrapper {
    margin-top: 10px;
  }

  .confirmation-code {
    margin-top: 5px;
    font-size: 24px;
    text-align: center;
  }
`;
