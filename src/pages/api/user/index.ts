/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';
import { getUser, createUser } from '@utilities/client/user';
import { IUser } from '@shared/types/user';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<IUser>>
) {
  const { body, method } = req;

  switch (method) {
    case 'GET': {
      const { username, password } = body;
      const user = await getUser(username, password);
      if (!user) {
        res.status(404).json({
          status: 404,
          error: true,
          message: 'Usuário ou Senha inválidos.',
        });
      } else {
        res.status(200).json({ status: 200, error: false, data: user });
      }
      break;
    }

    case 'POST': {
      const { name, username, password } = body;
      const user = await createUser(name, username, password);
      if (!user) {
        res.status(500).json({
          status: 500,
          error: true,
          message: 'Erro ao criar usuário',
        });
      } else {
        res.status(200).json({ status: 200, error: false, data: user });
      }
      break;
    }
    default: {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({
        status: 405,
        error: true,
        message: `Method ${method} Not Allowed`,
      }); // res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}

export default handler;
