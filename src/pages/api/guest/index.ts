/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';
import { getGuestList, createGuest } from '@utilities/client/guest';
import { IGuest } from '@shared/types/guest';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<IGuest | Array<IGuest>>>
) {
  const { body, method } = req;

  switch (method) {
    case 'GET': {
      const guests = await getGuestList();
      res.status(200).json({ status: 200, error: false, data: guests });
      break;
    }
    case 'POST': {
      try {
        const { guest } = body;
        const newGuest = await createGuest(guest);
        res.status(200).json({ status: 200, error: false, data: newGuest });
      } catch (e: unknown) {
        const error = e as Error;
        res
          .status(res.statusCode)
          .json({ error: true, message: error?.message });
      }

      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({
        status: 405,
        error: true,
        message: `Method ${method} Not Allowed`,
      }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
