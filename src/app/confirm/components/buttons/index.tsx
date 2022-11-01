import { useState } from 'react';
import { Loader } from '@shared/components/loader';
import { ErrorBox } from '@shared/components/error-box';
import { IProps } from './types';
import { handleClickButton, errorData } from './helpers';
import * as Styled from './styles';

export const ButtonsComponent: React.FC<IProps> = ({ id, confirmed }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div>
      {!confirmed ? (
        <Styled.ConfirmButton
          type="button"
          onClick={handleClickButton(id, true, setLoading, setError)}
        >
          Confirmar presença
        </Styled.ConfirmButton>
      ) : (
        <Styled.CancelButton
          type="button"
          onClick={handleClickButton(id, false, setLoading, setError)}
        >
          Cancelar confirmação
        </Styled.CancelButton>
      )}
      {loading && <Loader />}
      {error && (
        <Styled.ErrorWrapper>
          <ErrorBox {...errorData} />
        </Styled.ErrorWrapper>
      )}
    </div>
  );
};

export default ButtonsComponent;
