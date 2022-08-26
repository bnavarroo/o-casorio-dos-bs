import { useEffect } from 'react';
import { useGuest } from '@utilities/hooks/use-guest';
import { Loader } from '@shared/components/loader';
import { IGuestProps } from '@shared/types/guest';
import Buttons from './components/buttons';
import Info from './components/info';
import { logout, handleLogout, getMessage } from './helpers';
import * as Styled from './styles';

const Confirm: React.FC<IGuestProps> = ({ id, persistedGuest }) => {
  const { guest, error, loading } = useGuest(id as string, persistedGuest);
  const message = getMessage(guest?.confirmed as number);

  useEffect(() => {
    if (error) {
      logout(id);
    }
  }, [error, id]);

  return (
    <Styled.Wrapper>
      <Styled.Title as="p">
        Olá {guest?.name}!{' '}
        <button type="button" onClick={handleLogout()}>
          Não é você? sair.
        </button>
      </Styled.Title>
      <Styled.Message dangerouslySetInnerHTML={{ __html: message }} />
      <Info />
      <Buttons
        id={guest?.id as string}
        confirmed={guest?.confirmed as number}
      />
      <Styled.WarningMessage>
        Lembrando que o portal de confirmação estará disponível até&nbsp;
        <b>DD/MM/2023</b>.
      </Styled.WarningMessage>
      {(loading || !guest?.id) && <Loader />}
    </Styled.Wrapper>
  );
};

export default Confirm;
