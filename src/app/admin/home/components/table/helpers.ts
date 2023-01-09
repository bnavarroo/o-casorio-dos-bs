import Router from 'next/router';
import { parseObjectToQs } from '@utilities/http';
import { TStringMap } from '@shared/types/_globals';
import { IGuest } from '@shared/types/guest';

export const tableHeader = [
  {
    field: 'id',
    description: 'Código',
    className: '',
  },
  {
    field: 'name',
    description: 'Nome',
    className: 'text-left',
  },
  {
    field: 'internalName',
    description: 'Apelido',
    className: 'text-left',
  },
  {
    field: 'isChild',
    description: 'Criança?',
    className: '',
  },
  {
    field: 'confirmed',
    description: 'Confirmado?',
    className: '',
  },
  {
    field: 'updatedAt',
    description: 'Atualizado em',
    className: '',
  },
  {
    field: 'edit',
    description: '',
    className: '',
  },
];

export const handleEditGuest = (guest: IGuest) => () => {
  const qs = parseObjectToQs(guest as unknown as TStringMap);
  Router.push(`/admin/guest/${guest.id}/${qs}`, `/admin/guest/${guest.id}`);
};
