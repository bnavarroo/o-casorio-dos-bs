import { useState } from 'react';
import { withLoader } from '@utilities/hoc/with-loader';
import { IInjectedProps } from '@utilities/hoc/with-loader/types';
import { ErrorBox } from '@shared/components/error-box';
import { IProps } from './types';
import { handleClickButton, errorData } from './helpers';
import * as Styled from './styles';

export const ButtonsComponent: React.FC<IProps & IInjectedProps> = ({
  id,
  confirmed,
  setLoading,
}) => {
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
      {error && (
        <Styled.ErrorWrapper>
          <ErrorBox {...errorData} />
        </Styled.ErrorWrapper>
      )}
    </div>
  );
};

export default withLoader(ButtonsComponent);
