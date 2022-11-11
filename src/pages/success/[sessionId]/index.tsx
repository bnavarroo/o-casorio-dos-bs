import type { NextPage, GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';
import { TGuestFromServer } from '@shared/types/guest';
import { getGuestFromCookies } from '@utilities/guest';
import MainTemplate from '@templates/main';
import Success from '@app/success';

const SuccessPage: NextPage<TGuestFromServer> = ({ serverProps }) => (
  <MainTemplate>
    <Success persistedGuest={serverProps.persistedGuest} />
  </MainTemplate>
);

export default SuccessPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sessionId = ctx?.params?.sessionId;
  const cookies = parseCookies(ctx);

  if (sessionId !== cookies[COOKIES_CONFIG.keys.session]) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const persistedGuest = getGuestFromCookies(ctx);

  return {
    props: {
      serverProps: {
        persistedGuest,
      },
    },
  };
};
