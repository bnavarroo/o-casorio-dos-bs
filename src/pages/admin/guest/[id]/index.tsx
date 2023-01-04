import type { NextPage } from 'next';
// import type { GetServerSideProps } from 'next';
// import { getGuestFromCookies } from '@utilities/guest';
// import { TGuestFromServer } from '@shared/types/guest';
import MainTemplate from '@templates/main';
import AdmGuest from '@app/admin/guest';

const AdmGuestPage: NextPage = () => (
  <MainTemplate>
    <AdmGuest />
  </MainTemplate>
);

export default AdmGuestPage;

/*
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
*/
