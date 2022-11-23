/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@utilities/middleware/session';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST': {
      await req.session.destroy();
      res.status(200).json({ status: 200, error: false });

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
