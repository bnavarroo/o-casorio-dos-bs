import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 200px;
  height: auto;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      max-width: 240px;
    }
  `}

  img {
    max-width: 100%;
  }
`;
