import styled, { css } from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Wrapper = styled(FlexCentralized)`
  ${({ theme }) => css`
    font-size: 18px;
    text-align: center;
    color: #000;
    flex-direction: column-reverse;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 24px;
      flex-direction: row;
      text-align: left;
    }
  `}
`;

export const Title = styled.h2`
  font-size: 4em;
  font-weight: 700;
  font-family: 'Great Vibes', cursive;
`;

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.25em;
  margin-top: 10px;
`;

export const Link = styled.a`
  font-size: 0.75em;
  margin-top: 40px;
  display: table;
  margin: 40px auto 0;
  color: ${({ theme }) => theme.colors.text.default};
  text-decoration: none;
  border-bottom: 1px solid;
  padding-bottom: 8px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      margin-left: 0;
    }
  `}
`;

export const Arrow = styled.i`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-right: 4px;
`;
