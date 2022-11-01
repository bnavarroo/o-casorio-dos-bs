import styled, { css } from 'styled-components';

export const Spinner = styled.div`
  @keyframes spinner-animation {
    100% {
      transform: rotate(1turn);
    }
  }

  ${({ theme }) =>
    css`
      width: 56px;
      height: 56px;
      display: grid;
      border: 4.5px solid #0000;
      border-radius: 50%;
      border-color: ${theme.colors.primary} #0000;
      animation: spinner-animation 1s infinite linear;

      &::before,
      &::after {
        content: '';
        grid-area: 1/1;
        margin: 2.2px;
        border: inherit;
        border-radius: 50%;
      }

      &::before {
        border-color: ${theme.colors.secondary} #0000;
        animation: inherit;
        animation-duration: 0.5s;
        animation-direction: reverse;
      }

      &::after {
        margin: 8.9px;
      }
    `}
`;
