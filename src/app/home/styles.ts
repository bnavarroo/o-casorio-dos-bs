import styled, { css } from 'styled-components';
import { FlexWrapper } from '@styles/ui/flex';

export const Title = styled.h1`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 20px;
`;

export const OptionsWrapper = styled(FlexWrapper).attrs({
  $direction: 'column',
})`
  gap: 25px;
  min-width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      flex-direction: row;
      gap: 40px;
    }
  `}

  li {
    display: flex;
    justify-content: center;
    flex: 1 1 0;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    padding: 40px;
    box-shadow: 0px 5px 36px -8px #999;
    font-size: 20px;

    ${({ theme }) => css`
      @media (min-width: ${theme.breakpoints.tablet.min}) {
        font-size: 24px;
      }
    `}
  }
`;

export const ContentOption = styled.a`
  font-size: 1em;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  p {
    font-family: 'Great Vibes', cursive;
    font-size: 3em;
    line-height: 80px;
    margin-top: 10px;
  }
`;
