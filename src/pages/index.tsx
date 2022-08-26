import type { NextApiRequest, NextPageContext } from 'next';
import { getPropsFromServer } from '@app/search/helpers';
import Search from './search';

export default Search;

export async function getServerSideProps(
  ctx?: Pick<NextPageContext, 'req'> | { req: NextApiRequest } | null
) {
  return getPropsFromServer(ctx);
}
