import type { NextApiRequest, NextPage, NextPageContext } from 'next';
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

export async function getServerSideProps(
  ctx?:
    | { params: string; req: NextApiRequest }
    | Pick<NextPageContext, 'req'>
    | null
) {
  const { sessionId } =
    (await (ctx as { params: { sessionId: string } })?.params) || {};
  const cookies = parseCookies(ctx);
  const sessionIdFromCookies = cookies[COOKIES_CONFIG.keys.session];

  if (sessionId !== sessionIdFromCookies) {
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
}
