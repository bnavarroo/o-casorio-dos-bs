import styled, { css } from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Form = styled(FlexCentralized).attrs({ $direction: 'column' })`
  font-size: 10px;
  text-align: center;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      flex-direction: row;
    }
  `};

  label {
    font-size: 1.75em;
  }
`;

export const SelectsWrapper = styled(FlexCentralized)`
  ${({ theme }) => css`
    text-align: center;
    gap: 10px;
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      margin-left: auto;
      text-align: left;
    }

    select {
      margin-top: 2px;
      font-size: 14px;
      padding: 10px 5px;
      border-radius: 4px;
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.text.default};
      outline: none;
    }
  `}
`;
