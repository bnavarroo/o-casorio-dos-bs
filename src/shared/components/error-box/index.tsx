import { IProps } from './types';
import * as Styled from './styles';

const defaultTitle = 'Ops, algo inesperado aconteceu...';

export const ErrorBox: React.FC<IProps> = ({ title = defaultTitle, msg }) => (
  <Styled.Box>
    <Styled.Title>{title}</Styled.Title>
    {msg && <Styled.Msg>{msg}</Styled.Msg>}
  </Styled.Box>
);
