import styled, { css } from 'styled-components';
import { IProps } from './types';

export const Button = styled.button<IProps>`
  font-family: ${({ $specialFont }) =>
    $specialFont === false ? `'Bitter', serif` : `'Great Vibes', cursive;`};
  border-radius: 4px;
  padding: ${({ $padding }) => $padding ?? '10px 16px'};
  cursor: pointer;

  ${({ theme, $type }) =>
    $type === 'confirm' &&
    css`
      background: ${theme.colors.tertiary};
      color: ${theme.colors.text.onTertiary};
      border: 1px solid ${theme.colors.primary};
    `}

  ${({ theme, $type }) =>
    $type === 'cancel' &&
    css`
      background: #ebdfcd;
      color: ${theme.colors.text.default};
      border: 1px solid ${theme.colors.text.default};
    `}

  ${({ theme, $type }) =>
    $type === 'link' &&
    css`
      border: none;
      text-decoration: underline;
      color: ${theme.colors.primary};
    `}
`;
