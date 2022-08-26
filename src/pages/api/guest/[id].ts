/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';
import { TBinary } from '@shared/types/_globals';
import { IGuest } from '@shared/types/guest';
import { guests } from '@mocks/guest';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<IGuest>>
) {
  const {
    query: { id },
    body,
    method,
  } = req;
  const guest = guests.find((_guest) => _guest.id === id);

  switch (method) {
    case 'GET': {
      if (!guest) {
        res
          .status(404)
          .json({ error: true, message: 'Código não encontrado!' });
      } else {
        res.status(200).json({ error: false, data: guest });
      }
      break;
    }
    case 'PUT': {
      const { confirmed } = JSON.parse(body);
      const newGuest = {
        ...guest,
        confirmed: parseInt(confirmed as string, 10) as TBinary,
      } as IGuest;
      res.status(201).json({ error: false, data: newGuest });
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'PUT']);
      res
        .status(405)
        .json({ error: true, message: `Method ${method} Not Allowed` }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
