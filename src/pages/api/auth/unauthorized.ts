import type { NextApiRequest, NextApiResponse } from 'next';
import { IHttpResponse } from '@utilities/http/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHttpResponse<null>>
) {
  res.status(401).json({ status: 401, error: true, message: 'Not authorized' });
}
