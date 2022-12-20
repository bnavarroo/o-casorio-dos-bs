import { useEffect } from 'react';
import { useGuest } from '@utilities/hooks/use-guest';
import { Loader } from '@shared/components/loader';
import { IGuestProps } from '@shared/types/guest';
import { guestLogout, handleGuestLogout } from '@utilities/guest';
import Buttons from './components/buttons';
import Info from './components/info';
import { getMessage } from './helpers';
import * as Styled from './styles';

const Confirm: React.FC<IGuestProps> = ({ id, persistedGuest }) => {
  const { guest, error, loading } = useGuest(id as string, persistedGuest);
  const message = getMessage(!!guest?.confirmed);

  useEffect(() => {
    if (error) {
      const redirectTo = id ? `/?id=${id}` : '/';
      guestLogout(redirectTo);
    }
  }, [error, id]);

  return (
    <Styled.Wrapper>
      <Styled.Title as="p">
        Olá {guest?.name}!{' '}
        <button type="button" onClick={handleGuestLogout()}>
          Não é você? sair.
        </button>
      </Styled.Title>
      <Styled.Message dangerouslySetInnerHTML={{ __html: message }} />
      <Info />
      <Buttons id={guest?.id as string} confirmed={!!guest?.confirmed} />
      <Styled.WarningMessage>
        Lembrando que o portal de confirmação estará disponível até&nbsp;
        <b>20/02/2023</b>.
      </Styled.WarningMessage>
      {(loading || !guest?.id) && <Loader />}
    </Styled.Wrapper>
  );
};

export default Confirm;
