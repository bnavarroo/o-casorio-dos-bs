import { useState } from 'react';
import { Loader } from '@shared/components/loader';
import { IProps } from './types';
import { handleClickButton } from './helpers';
import * as Styled from './styles';

export const ButtonsComponent: React.FC<IProps> = ({ id, confirmed }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      {!confirmed ? (
        <Styled.ConfirmButton
          type="button"
          onClick={handleClickButton(id, 1, setLoading)}
        >
          Confirmar presença
        </Styled.ConfirmButton>
      ) : (
        <Styled.CancelButton
          type="button"
          onClick={handleClickButton(id, 0, setLoading)}
        >
          Cancelar confirmação
        </Styled.CancelButton>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default ButtonsComponent;
