/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { IPropsInput, IPropsInputWrapperButton } from './types';

export const Input = styled.input<IPropsInput>`
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

export const InputWrapperButton = styled.div<IPropsInputWrapperButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme, $borderColor }) => $borderColor || theme.colors.secondary};
  position: relative;
  max-width: 100%;
  width: ${({ $width }) => $width || 'auto'};

  button {
    font-size: 1em;
    width: auto;
    padding: 0;
    position: absolute;
    right: 0;
    bottom: 6px;
    svg {
      width: 1.75em;
      transform: rotate(270deg);
      fill: ${({ theme, $borderColor }) => $borderColor || theme.colors.secondary};
    }
  }

  input {
    font-size: 2em;
  }
`;
