import { useState, useEffect, ChangeEvent } from 'react';
import Router from 'next/router';
import { useGuest } from '@utilities/hooks/use-guest';
import { ErrorBox } from '@shared/components/error-box';
import { Loader } from '@shared/components/loader';
import { Input } from '@styles/ui/input';
import SearchIcon from '@assets/img/search-icon.svg';
import { IGuestProps } from '@shared/types/guest';
import { handleSubmit } from './helpers';
import * as Styled from './styles';

const Search: React.FC<IGuestProps> = ({ id: qsId = '', persistedGuest }) => {
  const [id, setId] = useState<string>(qsId as string);
  const { guest, error, errorTitle, errorMessage, loading } = useGuest(
    id,
    persistedGuest
  );

  useEffect(() => {
    if (guest?.id) {
      Router.push(`/confirm/${guest.id}`);
    }
  }, [guest]);

  return (
    <Styled.Form
      as="form"
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => handleSubmit(e, setId)}
    >
      <label htmlFor="guestId">Informe o código de confirmação</label>
      <Styled.InputWrapper>
        <Input
          type="text"
          name="guestId"
          defaultValue={qsId}
          id="guestId"
          $borderColor="transparent"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </Styled.InputWrapper>
      <em>* o código de confirmação foi encaminhado junto com o convite.</em>
      {error && (
        <Styled.ErrorWrapper>
          <ErrorBox title={errorTitle} msg={errorMessage} />
        </Styled.ErrorWrapper>
      )}
      {(loading || guest?.id) && <Loader />}
    </Styled.Form>
  );
};

export default Search;
