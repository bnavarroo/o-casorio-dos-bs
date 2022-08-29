import styled, { css } from 'styled-components';

export const List = styled.ul`
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 0 20px 40px;
  box-shadow: 0px 5px 36px -8px #999;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      padding: 0 40px 40px;
    }
    @media (max-width: ${theme.breakpoints.mobile.max}) {
      display: table;
      width: 96%;
      margin: auto;
    }
  `}
`;

export const ListItem = styled.li`
  padding-top: 40px;
  font-size: 13px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 16px;
    }
  `}
`;

export const Question = styled.h4`
  font-size: 1.75em;
  line-height: 1.2em;
  font-weight: 600;
`;

export const Answer = styled.p`
  font-size: 1.25em;
  line-height: 1.45em;
  padding-top: 10px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
