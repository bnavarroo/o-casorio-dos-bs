import { useState } from 'react';
import image from '@assets/img/success_image_02.png';
import { IGuestProps } from '@shared/types/guest';
import { Loader } from '@shared/components/loader';
import { handleChangeReponse, handleNewConfirm } from './helpers';
import * as Styled from './styles';

export const SuccessComponent: React.FC<IGuestProps> = ({ persistedGuest }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Styled.Wrapper>
      <picture>
        <source srcSet={image.src} type="image/webp" />
        <img src={image.src} alt="B & B" title="B & B" />
      </picture>
      <Styled.Msg>Agradecemos sua resposta!</Styled.Msg>
      <Styled.UserData>
        <li>
          <span>Convidado:</span>&nbsp;
          {persistedGuest?.name}
        </li>
        <li>
          <span>Status:</span>&nbsp;
          {persistedGuest?.confirmed ? 'Confirmado' : 'Não Confirmado'}
        </li>
        <li>
          <span>Data/Hora:</span>&nbsp;
          {persistedGuest?.updatedAt}
        </li>
      </Styled.UserData>
      <Styled.ButtonsWrapper>
        <Styled.ButtonBox>
          <Styled.NewButton onClick={handleNewConfirm('/search', setLoading)}>
            Nova Confirmação
          </Styled.NewButton>
          <span>* para confirmar outro convidado</span>
        </Styled.ButtonBox>
        <Styled.ButtonBox>
          <Styled.ChangeButton
            onClick={handleChangeReponse(persistedGuest?.id as string)}
          >
            Alterar Resposta
          </Styled.ChangeButton>
          <span>* para alterar a resposta da confirmação atual</span>
        </Styled.ButtonBox>
      </Styled.ButtonsWrapper>
      {loading && <Loader />}
    </Styled.Wrapper>
  );
};

export default SuccessComponent;
