/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { getGuestList } from '@utilities/client/guest';
import { IHttpResponse } from '@utilities/http/types';
import { IGuest } from '@shared/types/guest';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<Array<IGuest>>>
) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const guests = await getGuestList();
      res.status(200).json({ status: 200, error: false, data: guests });
      break;
    }
    default: {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({
        status: 405,
        error: true,
        message: `Method ${method} Not Allowed`,
      }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
