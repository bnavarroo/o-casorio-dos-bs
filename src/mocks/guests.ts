import { IGuest } from '@shared/types/guest';

export const guests: Array<IGuest> = [
  {
    id: 'ABC123',
    name: 'Exemplo de nome',
    internalName: 'Exemplo de nome interno',
    isChild: false,
    confirmed: false,
    priority: 2,
    age: null,
    isActive: true,
  },
];

/*
let scriptStr = `INSERT INTO Guest (id, name, internalName, isChild, confirmed, updatedAt, age, isActive) VALUES `;

guests.forEach((guest, index) => {
  if (index > 0) {
    scriptStr += ', ';
  }
  scriptStr += `('${guest.id}', '${guest.name}', '${guest.internalName}', ${
    guest.isChild ? 1 : 0
  }, ${guest.confirmed ? 1 : 0}, '2022-11-05T09:24:00+00:00', null, true)`;
});
*/
