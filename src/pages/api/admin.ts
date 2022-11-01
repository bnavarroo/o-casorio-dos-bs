/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<{ name: string }>>
) {
  const { method, body } = req;
  const { password } = JSON.parse(body);

  switch (method) {
    case 'POST': {
      if (password === 'abc123') {
        res.status(200).json({ error: false, data: { name: 'Admin' } });
      }
      res.status(404).json({ error: true, message: 'Usuário não encontrado!' });
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
