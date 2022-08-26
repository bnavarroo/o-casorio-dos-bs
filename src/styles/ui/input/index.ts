import styled, { css } from 'styled-components';
import { IProps } from './types';

export const Input = styled.input<IProps>`
  font-size: inherit;
  text-align: inherit;
  outline: none;
  border-width: 1px;
  background: transparent;
  padding: 8px;
  max-width: 100%;
  border-color: ${({ theme, $borderColor }) =>
    $borderColor ?? theme.colors.secondary};
  ${({ $allBorders }) =>
    !$allBorders &&
    css`
      border-style: hidden;
      border-bottom-style: solid;
    `}
`;
