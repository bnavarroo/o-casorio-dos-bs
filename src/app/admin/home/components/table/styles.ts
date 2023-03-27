import styled, { css } from 'styled-components';
import { FlexCentralized } from '@styles/ui/flex';

export const Showing = styled(FlexCentralized)`
  margin-bottom: 10px;

  i {
    font-style: italic;
  }
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;

    .text-left {
      text-align: left;
    }

    .confirmed {
      color: ${theme.colors.primary};
      background: rgba(255, 255, 255, 0.5);
    }

    .disabled {
      background: #ffeaea;
      color: #c01e1e;

      button {
        color: #c01e1e;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet.max}) {
      thead {
        display: none;
      }

      tbody {
        tr {
          border: 1px solid ${theme.colors.secondary};
          border-bottom-width: 2px;
          border-bottom-style: dotted;

          &:last-child {
            border-bottom-width: thin;
            border-bottom-style: solid;
          }

          td {
            position: relative;
            display: block;
            min-width: 100%;
            box-sizing: border-box;
            text-align: left;
            padding: 5px 10px 5px 50%;
            line-height: 18px;

            &.centralized {
              display: flex;
              justify-content: center;
              padding: 5px 10px 5px 0;
            }

            &:before {
              position: absolute;
              top: 0;
              left: 0;
              width: calc(50% - 8px);
              white-space: nowrap;
              text-align: right;
              padding: 5px 0;
              font-weight: 600;
            }

            &:nth-of-type(1),
            &:nth-of-type(1):before {
              padding-top: 20px;
            }
            &:nth-of-type(8),
            &:nth-of-type(8):before {
              padding-bottom: 10px;
            }
            &:nth-of-type(9),
            &:nth-of-type(9):before {
              padding-bottom: 20px;
            }

            &:nth-of-type(1):before {
              content: 'Código:';
            }
            &:nth-of-type(2):before {
              content: 'Nome:';
            }
            &:nth-of-type(3):before {
              content: 'Apelido:';
            }
            &:nth-of-type(4):before {
              content: 'Criança:';
            }
            &:nth-of-type(5):before {
              content: 'Idade:';
            }
            &:nth-of-type(6):before {
              content: 'Confirmado:';
            }
            &:nth-of-type(7):before {
              content: 'Prioridade:';
            }
            &:nth-of-type(8):before {
              content: 'Atualizado em:';
            }
          }
        }
      }
    }

    @media (min-width: ${theme.breakpoints.desktopSmall.min}) {
      thead {
        th {
          font-size: 18px;
          padding: 15px 10px;
          font-weight: 600;
          border-top: 1px solid ${theme.colors.secondary};
          border-bottom: 1px solid ${theme.colors.secondary};
        }
      }

      tbody {
        td {
          font-size: 14px;
          padding: 10px 2px;
          border-bottom: 1px solid #e8dac2;
        }
      }
    }
  `}
`;
