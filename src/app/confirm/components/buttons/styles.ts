import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Great Vibes', cursive;
  font-size: 2.4em;
  border-radius: 4px;
  margin-top: 40px;
  padding: 10px 16px;
  min-width: 300px;
  cursor: pointer;
`;

export const ConfirmButton = styled(Button)`
  ${({ theme }) => css`
    background: #9ab9ad;
    color: ${theme.colors.text.onPrimary};
    border: 1px solid ${theme.colors.primary};
  `}
`;

export const CancelButton = styled(Button)`
  ${({ theme }) => css`
    background: #ebdfcd;
    color: ${theme.colors.text.default};
    border: 1px solid ${theme.colors.text.default};
  `}
`;
