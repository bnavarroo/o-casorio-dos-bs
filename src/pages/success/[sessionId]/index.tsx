import type { NextPage, GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';
import { IServerProps } from '@shared/types/_globals';
import MainTemplate from '@templates/main';
import Success from '@app/success';

const SuccessPage: NextPage<IServerProps<{ sessionId: string }>> = () => (
  <MainTemplate>
    <Success />
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

  return {
    props: {
      serverProps: {
        sessionId,
      },
    },
  };
};
