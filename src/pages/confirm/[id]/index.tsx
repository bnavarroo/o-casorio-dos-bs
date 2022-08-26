import type { NextApiRequest, NextPage, NextPageContext } from 'next';
import { getGuestFromCookies } from '@utilities/guest';
import { TGuestFromServer } from '@shared/types/guest';
import MainTemplate from '@templates/main';
import Confirm from '@app/confirm';

const ConfirmPage: NextPage<TGuestFromServer> = ({ serverProps }) => (
  <MainTemplate>
    <Confirm
      persistedGuest={serverProps?.persistedGuest}
      id={serverProps?.id as string}
    />
  </MainTemplate>
);

export default ConfirmPage;

export async function getServerSideProps(
  ctx?:
    | { params: string; req: NextApiRequest }
    | Pick<NextPageContext, 'req'>
    | null
) {
  const persistedGuest = getGuestFromCookies(ctx);
  const { id } = (await (ctx as { params: { id: string } })?.params) || {};

  return {
    props: {
      serverProps: {
        persistedGuest,
        id,
      },
    },
  };
}
