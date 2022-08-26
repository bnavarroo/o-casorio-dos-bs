import styled, { css } from 'styled-components';
import { ContainerPage } from '@styles/ui/container';

export const Footer = styled(ContainerPage)`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  padding-top: 12px;
  padding-bottom: 12px;

  &:before,
  &:after {
    display: none;
  }

  ${({ theme }) => css`
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      flex-direction: row;
      justify-content: space-between;
    }

    a {
      font-weight: 600;
      color: ${theme.colors.text.default};
    }
  `}
`;
