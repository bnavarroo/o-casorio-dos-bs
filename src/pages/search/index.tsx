import type { NextApiRequest, NextPage, NextPageContext } from 'next';
import MainTemplate from '@templates/main';
import Search from '@app/search';
import { getPropsFromServer } from '@app/search/helpers';
import { TGuestFromServer } from '@shared/types/guest';

const SearchPage: NextPage<TGuestFromServer> = ({ serverProps }) => (
  <MainTemplate>
    <Search persistedGuest={serverProps?.persistedGuest} id={serverProps?.id} />
  </MainTemplate>
);

export default SearchPage;

export async function getServerSideProps(
  ctx?: Pick<NextPageContext, 'req'> | { req: NextApiRequest } | null
) {
  return getPropsFromServer(ctx);
}
