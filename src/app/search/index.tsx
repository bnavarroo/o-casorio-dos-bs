import { useState, ChangeEvent } from 'react';
import { EVENT_CONFIG } from '@config/event';
import { withLoader } from '@utilities/hoc/with-loader';
import { IInjectedProps } from '@utilities/hoc/with-loader/types';
import { ErrorBox } from '@shared/components/error-box';
import { IGuestProps } from '@shared/types/guest';
import { Input, InputWrapperButton } from '@styles/ui/input';
import SearchIcon from '@assets/img/search-icon.svg';
import { handleSubmit } from './helpers';
import * as Styled from './styles';

const Search: React.FC<IGuestProps & IInjectedProps> = ({
  id: idFromProps,
  persistedGuest,
  setLoading,
}) => {
  const [notFound, setNotFound] = useState<boolean>(
    !!(idFromProps && !persistedGuest)
  );

  return (
    <Styled.Form
      as="form"
      onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
        handleSubmit(e, setLoading, setNotFound)
      }
    >
      <label htmlFor="guestId">Informe o código de confirmação</label>
      <InputWrapperButton $width="500px">
        <Input
          type="text"
          name="guestId"
          defaultValue={idFromProps}
          id="guestId"
          $borderColor="transparent"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </InputWrapperButton>
      {notFound && (
        <Styled.ErrorWrapper>
          <ErrorBox
            title="Código não encontrado"
            msg="Verifique o código informado e tente novamente. Para dúvidas e mais informações acesse o link 'dúvidas e ajuda', localizado no canto superior direito da tela."
          />
        </Styled.ErrorWrapper>
      )}
      <Styled.InformationBox>
        <b className="title">Informações importantes:</b>
        <p className="content">
          - O código de confirmação foi encaminhado junto com o convite;
        </p>
        <p className="content">
          - A data limite para confirmação é {EVENT_CONFIG.confirmLimitDate}.
        </p>
      </Styled.InformationBox>
    </Styled.Form>
  );
};

export default withLoader(Search);
