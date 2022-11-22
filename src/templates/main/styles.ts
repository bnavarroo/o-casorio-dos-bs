import styled from 'styled-components';
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
  margin-bottom: auto;
`;
