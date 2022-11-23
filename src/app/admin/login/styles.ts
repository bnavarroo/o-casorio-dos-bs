import styled, { css } from 'styled-components';
import { FlexWrapper } from '@styles/ui/flex';
import { Button as DefaultButton } from '@styles/ui/button';

const contentWidth = '550px';

export const Form = styled.form`
  box-sizing: border-box;
  border-radius: 8px;
  padding: 40px 60px;
  box-shadow: 0px 5px 36px -8px #999;
  max-width: ${contentWidth};
  margin: 0 auto;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.text.default};
    @media (max-width: ${theme.breakpoints.mobile.max}) {
      width: 96%;
      max-width: 96%;
      padding: 30px 40px;
    }
  `}
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.25em;
  line-height: 1.25em;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FieldWrapper = styled(FlexWrapper).attrs({ $direction: 'column' })`
  margin-bottom: 30px;
  font-size: 20px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      margin-bottom: 40px;
    }
  `}

  label {
    font-weight: bold;
    font-size: 0.75em;
  }
`;

export const Button = styled(DefaultButton).attrs({ $type: 'confirm' })`
  font-size: 2.4em;
  display: table;
  margin: 0 auto;
  width: 240px;
  max-width: 100%;
`;

export const ErrorWrapper = styled.div`
  margin: 20px auto 0;
  max-width: ${contentWidth};
`;
