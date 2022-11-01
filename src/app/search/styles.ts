import styled, { css } from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Form = styled(FlexCentralized).attrs({ $direction: 'column' })`
  font-size: 22px;
  text-align: center;
  margin-top: 2rem;
  padding-left: 12px;
  padding-right: 12px;

  ${({ theme }) => css`
    font-size: 16px;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 22px;
    }
  `}

  label {
    margin-bottom: 12px;
  }

  em {
    font-size: 13px;
    line-height: 18px;
    padding: 8px 0px;
  }
`;

export const InputWrapper = styled(FlexCentralized)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  position: relative;
  max-width: 100%;
  width: 500px;

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
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  input {
    font-size: 2em;
  }
`;

export const ErrorWrapper = styled.div`
  margin-top: 20px;
  font-size: 20px;
  max-width: 500px;
`;
