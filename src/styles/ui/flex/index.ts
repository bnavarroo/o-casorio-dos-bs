import styled from 'styled-components';
import { IProps } from './types';

export const FlexWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? 'row'};
`;

export const FlexCentralized = styled(FlexWrapper)`
  justify-content: center;
  align-items: center;
`;
