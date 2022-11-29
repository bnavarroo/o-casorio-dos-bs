import styled, { css } from 'styled-components';
import { FlexWrapper } from '@styles/ui/flex';
import { Button } from '@styles/ui/button';

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
`;

export const FilterWrapper = styled(FlexWrapper).attrs({
  $direction: 'column',
})`
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0 60px 0;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      flex-direction: row;
      align-items: flex-end;
      gap: 10px;
    }
  `}
`;

export const NewButton = styled(Button).attrs({ $type: 'confirm' })`
  font-family: 'Bitter', serif;
  letter-spacing: 1.5px;
`;
