/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';
import { IGuest } from '@shared/types/guest';
import { guests } from '@mocks/guest';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<Array<IGuest>>>
) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      res.status(200).json({ error: false, data: guests });
      break;
    }
    default: {
      res.setHeader('Allow', ['GET']);
      res
        .status(405)
        .json({ error: true, message: `Method ${method} Not Allowed` }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
