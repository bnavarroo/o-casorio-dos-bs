import styled, { css } from 'styled-components';
import { FlexWrapper } from '@styles/ui/flex';

const fontSizeDefault = css`
  font-size: 18px;
`;

export const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 60px;
  text-align: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet.max}) {
      margin-top: 20px;
      font-size: 48px;
    }
  `}
`;

export const Content = styled.p`
  ${fontSizeDefault}
  line-height: 22px;
  text-align: justify;
  margin: 20px 0 40px 0;
`;

export const PixBox = styled(FlexWrapper).attrs({ $direction: 'column' })`
  ${fontSizeDefault}
  text-align: center;
`;

export const PixValue = styled.h2`
  font-size: 40px;
  letter-spacing: 6px;
  margin-top: 20px;
`;

export const PixName = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const BottomMsg = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-top: 60px;
  text-align: center;
`;
