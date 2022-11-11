import styled, { css } from 'styled-components';
import { FlexWrapper, FlexCentralized } from '@styles/ui/flex';
import { Button } from '@styles/ui/button';

export const Wrapper = styled(FlexCentralized).attrs({ $direction: 'column' })`
  text-align: center;
  img {
    width: 200px;
    max-width: 100%;
  }
`;

export const Msg = styled.h1`
  ${({ theme }) => css`
    font-size: 24px;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 28px;
    }
  `}
`;

export const UserData = styled.ul`
  margin: 20px 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;

  li {
    span {
      font-weight: 400;
    }
  }
`;

export const ButtonsWrapper = styled(FlexWrapper).attrs({
  $direction: 'column',
})`
  gap: 16px;
`;

export const ButtonBox = styled(FlexWrapper).attrs({
  $direction: 'column',
})`
  span {
    font-size: 12px;
    font-style: italic;
    margin-top: 6px;
  }
`;

const BaseButton = styled(Button)`
  font-size: 30px;
  width: 300px;
  max-width: 100%;
`;

export const ChangeButton = styled(BaseButton).attrs({ $type: 'cancel' })``;

export const NewButton = styled(BaseButton).attrs({ $type: 'confirm' })``;
