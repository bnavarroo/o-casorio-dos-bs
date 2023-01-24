import styled, { css } from 'styled-components';
import { FlexWrapper } from '@styles/ui/flex';
import { Button } from '@styles/ui/button';

export const Form = styled(FlexWrapper).attrs({ $direction: 'column' })`
  gap: 40px;
  font-size: 16px;
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 20px;
    }
  `}
`;

export const FormTitle = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 3em;
  text-align: center;
  margin-top: 0.5em;
`;

export const FormLine = styled.div<{ $cols?: number }>`
  display: grid;
  gap: 30px;
  ${({ theme, $cols }) => css`
    grid-template-columns: 1fr;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      grid-template-columns: repeat(${$cols ?? 1}, 1fr);
    }
  `}
`;

export const FormCol = styled.div`
  label {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    font-style: italic;
  }

  input,
  select {
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
  }

  select {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 10px;
  }
`;

export const FormButton = styled(Button)`
  font-size: 20px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
