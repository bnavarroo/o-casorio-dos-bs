/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';
import { getGuest, updateGuest } from '@utilities/client/guest';
import { IGuest } from '@shared/types/guest';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<IGuest>>
) {
  const {
    query: { id },
    body,
    method,
  } = req;

  switch (method) {
    case 'GET': {
      const guest = await getGuest(id as string);
      if (!guest) {
        res.status(404).json({
          status: 404,
          error: true,
          message: 'Código não encontrado!',
        });
      } else {
        res.status(200).json({ status: 200, error: false, data: guest });
      }
      break;
    }
    case 'PUT': {
      try {
        const { guest } = body;
        const updatedGuest = await updateGuest(id as string, guest);
        res.status(201).json({ status: 201, error: false, data: updatedGuest });
      } catch (e: unknown) {
        const error = e as Error;
        res
          .status(res.statusCode)
          .json({ error: true, message: error?.message });
      }

      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).json({
        status: 405,
        error: true,
        message: `Method ${method} Not Allowed`,
      }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
