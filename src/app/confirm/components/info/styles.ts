import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;
  font-size: 18px;

  .mt {
    margin-top: 40px;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 22px;
    }
  `}
`;

export const Title = styled.h3`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5em;
  font-weight: bold;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 1em;
  line-height: 1.25em;
`;
