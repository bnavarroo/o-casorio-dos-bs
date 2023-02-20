import { ChangeEvent } from 'react';
import { withLoader } from '@utilities/hoc/with-loader';
import { IPersistedGuest } from '@shared/types/guest';
import { IInjectedProps } from '@utilities/hoc/with-loader/types';
import { Input } from '@styles/ui/input';
import { handleSubmit } from './helpers';
import * as Styled from './styles';

const AdmGuest: React.FC<IPersistedGuest & IInjectedProps> = ({
  persistedGuest,
  setLoading,
}) => {
  const {
    id,
    name,
    internalName,
    isChild,
    confirmed,
    priority,
    age,
    isActive = true,
  } = persistedGuest ?? {};
  return (
    <Styled.Form
      as="form"
      onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
        handleSubmit(e, !!persistedGuest, setLoading)
      }
    >
      <Styled.FormTitle>
        {persistedGuest ? 'Editar' : 'Novo'} Convidado
      </Styled.FormTitle>
      <Styled.FormLine $cols={3}>
        <Styled.FormCol>
          <label htmlFor="id">Id</label>
          <Input type="text" name="id" defaultValue={id} id="id" />
        </Styled.FormCol>
        <Styled.FormCol>
          <label htmlFor="isActive">Ativo?</label>
          <select
            name="isActive"
            id="isActive"
            defaultValue={isActive ? 'true' : 'false'}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </Styled.FormCol>
        <Styled.FormCol>
          <label htmlFor="confirmed">Está confirmado?</label>
          <select
            name="confirmed"
            id="confirmed"
            defaultValue={confirmed ? 'true' : 'false'}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </Styled.FormCol>
      </Styled.FormLine>
      <Styled.FormLine $cols={2}>
        <Styled.FormCol>
          <label htmlFor="name">Nome</label>
          <Input type="text" name="name" defaultValue={name} id="name" />
        </Styled.FormCol>
        <Styled.FormCol>
          <label htmlFor="internalName">Nome Interno</label>
          <Input
            type="text"
            name="internalName"
            defaultValue={internalName}
            id="internalName"
          />
        </Styled.FormCol>
      </Styled.FormLine>
      <Styled.FormLine $cols={3}>
        <Styled.FormCol>
          <label htmlFor="confirmed">Prioridade</label>
          <select
            name="priority"
            id="priority"
            defaultValue={priority === 1 ? '1' : '2'}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </Styled.FormCol>
        <Styled.FormCol>
          <label htmlFor="isChild">É Criança?</label>
          <select
            name="isChild"
            id="isChild"
            defaultValue={isChild ? 'true' : 'false'}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </Styled.FormCol>
        <Styled.FormCol>
          <label htmlFor="age">Idade</label>
          <Input type="number" name="age" id="age" defaultValue={age ?? ''} />
        </Styled.FormCol>
      </Styled.FormLine>
      <Styled.FormButton type="submit" $type="confirm" $specialFont={false}>
        Salvar
      </Styled.FormButton>
    </Styled.Form>
  );
};

export default withLoader(AdmGuest);
