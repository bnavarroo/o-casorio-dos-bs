import type { NextPage, GetServerSideProps } from 'next';
import { TGuestFromServer } from '@shared/types/guest';
import MainTemplate from '@templates/main';
import AdmGuest from '@app/admin/guest';
import { getSSRProps } from '@app/admin/guest/helpers-ssr';

const AdmGuestPage: NextPage<TGuestFromServer> = ({ serverProps }) => (
  <MainTemplate>
    <AdmGuest persistedGuest={serverProps?.persistedGuest} />
  </MainTemplate>
);

export default AdmGuestPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await getSSRProps(ctx);
  return result;
};
