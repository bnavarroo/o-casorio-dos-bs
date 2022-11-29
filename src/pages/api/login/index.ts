/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@utilities/middleware/session';
import { IHttpResponse } from '@utilities/http/types';
import { getUser } from '@utilities/client/user';
import { IUser } from '@shared/types/user';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<IUser>>
) {
  const { body, method } = req;

  switch (method) {
    case 'POST': {
      const { username, password } = body;
      const user = await getUser(username, password);
      if (!user) {
        res.status(404).json({
          status: 404,
          error: true,
          message: 'Usuário ou Senha inválidos.',
        });
      } else {
        const loggedUser = { ...user, isLoggedIn: true };
        req.session.user = loggedUser;
        await req.session.save();
        res.status(200).json({
          status: 200,
          error: false,
          data: loggedUser,
        });
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

export default withIronSessionApiRoute(handler, sessionOptions);
