import styled from 'styled-components';
import { Button as DefaultButton } from '@styles/ui/button';

const Button = styled(DefaultButton)`
  font-size: 2.4em;
  margin-top: 40px;
  min-width: 300px;
  cursor: pointer;
`;

export const ConfirmButton = styled(Button).attrs({ $type: 'confirm' })``;

export const CancelButton = styled(Button).attrs({ $type: 'cancel' })``;

export const ErrorWrapper = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;
