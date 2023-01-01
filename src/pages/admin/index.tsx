import type { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '@utilities/middleware/session';
import { TSSRProps } from '@app/admin/home/types';
import { getSSRProps } from '@app/admin/home/helpers';
import AdmHomePage from './home';

export default AdmHomePage;

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async (ctx) => {
    const result = await getSSRProps(ctx);
    return {
      props: result,
    } as unknown as GetServerSidePropsResult<{ props: TSSRProps }>;
  },
  sessionOptions
);
