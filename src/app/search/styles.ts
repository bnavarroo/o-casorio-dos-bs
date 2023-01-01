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
`;

export const ErrorWrapper = styled.div`
  margin-top: 20px;
  font-size: 20px;
  max-width: 500px;
`;

export const InformationBox = styled.div`
  margin-top: 10%;
  border: 1px dotted;
  padding: 20px;
  font-size: 22px;

  .title {
    display: block;
  }

  .content {
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
  }
`;
