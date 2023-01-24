import { IGuest } from '@shared/types/guest';

export const guests: Array<IGuest> = [
  {
    id: 'BecAE5',
    name: 'Letícia',
    internalName: 'Filha do Rodrigo',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'QJAUzy',
    name: 'Eduarda',
    internalName: 'Duda da Faculdade',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'rIdNr5',
    name: 'Acompanhante Eduarda',
    internalName: 'Duda da Faculdade',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'jY03Qw',
    name: 'Daiane',
    internalName: 'Daiane do Anderson',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'xSYtY2',
    name: 'Tio Luis',
    internalName: 'Luis da Tia Tereza',
    isChild: false,
    confirmed: false,
    priority: 2,
  },
  {
    id: 'IYBmsO',
    name: 'Mari',
    internalName: 'Mariana da Tia Tereza',
    isChild: false,
    confirmed: false,
    priority: 2,
  },
  {
    id: 'R15axi',
    name: 'Ana Paula',
    internalName: 'Ana Paula da Tia Tereza',
    isChild: false,
    confirmed: false,
    priority: 2,
  },
  {
    id: 'oSbJ4E',
    name: 'Márcio',
    internalName: 'Márcio Irmão do Luis H.',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'uCpHQe',
    name: 'Esposa Márcio',
    internalName: 'Esposa do Márcio do Luis H.',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'FVSDhE',
    name: 'Filho Márcio',
    internalName: 'Filho do Márcio do Luis H.',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: '16JAYD',
    name: 'Andressa Ruiz',
    internalName: 'Andressa do Filipe',
    isChild: false,
    confirmed: false,
    priority: 1,
  },
  {
    id: 'HsFnnk',
    name: 'Luzia',
    internalName: 'Tia Luzia de SP',
    isChild: false,
    confirmed: false,
    priority: 2,
  },
];

/*
let scriptStr = `INSERT INTO Guest (id, name, internalName, isChild, confirmed, updatedAt) VALUES `;

guests.forEach((guest, index) => {
  if (index > 0) {
    scriptStr += ', ';
  }
  scriptStr += `('${guest.id}', '${guest.name}', '${guest.internalName}', ${
    guest.isChild ? 1 : 0
  }, ${guest.confirmed ? 1 : 0}, '2022-11-05T09:24:00+00:00')`;
});
*/
