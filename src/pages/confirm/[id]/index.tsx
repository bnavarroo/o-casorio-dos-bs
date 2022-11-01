import type { NextPage, GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const persistedGuest = getGuestFromCookies(ctx);
  const id = ctx?.params?.id;

  return {
    props: {
      serverProps: {
        persistedGuest,
        id,
      },
    },
  };
};
