import { ChangeEvent } from 'react';
import { IPersistedGuest } from '@shared/types/guest';
import { Input } from '@styles/ui/input';
import { handleSubmit } from './helpers';

const AdmGuest: React.FC<IPersistedGuest> = ({ persistedGuest }) => {
  const { id, name, internalName, isChild, confirmed, priority } =
    persistedGuest ?? {};
  return (
    <form
      onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
        handleSubmit(e, !!persistedGuest)
      }
    >
      <div>Formuário de Admin</div>
      <div>
        <label htmlFor="id">Id</label>
        <Input type="text" name="id" defaultValue={id} id="id" />
      </div>
      <div>
        <label htmlFor="name">Nome</label>
        <Input type="text" name="name" defaultValue={name} id="name" />
      </div>
      <div>
        <label htmlFor="internalName">Nome Interno</label>
        <Input
          type="text"
          name="internalName"
          defaultValue={internalName}
          id="internalName"
        />
      </div>
      <div>
        <label htmlFor="isChild">É Criança?</label>
        <select
          name="isChild"
          id="isChild"
          defaultValue={isChild ? 'true' : 'false'}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      <div>
        <label htmlFor="confirmed">Está confirmado?</label>
        <select
          name="confirmed"
          id="confirmed"
          defaultValue={confirmed ? 'true' : 'false'}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      <div>
        <label htmlFor="confirmed">Prioridade</label>
        <select
          name="priority"
          id="priority"
          defaultValue={priority === 1 ? '1' : '2'}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AdmGuest;
