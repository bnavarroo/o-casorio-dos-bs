/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';
import { getUser } from '@utilities/client/user';
import { IUser } from '@shared/types/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<IUser>>
) {
  const { method, body } = req;
  const { username, password } = JSON.parse(body);

  switch (method) {
    case 'POST': {
      const user = await getUser(username, password);
      if (!user) {
        res.status(404).json({
          status: 404,
          error: true,
          message: 'Usuário não encontrado!',
        });
      } else {
        res.status(200).json({ status: 200, error: false, data: user });
      }
      break;
    }
    default: {
      res.setHeader('Allow', ['POST']);
      res
        .status(405)
        .json({ error: true, message: `Method ${method} Not Allowed` }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
