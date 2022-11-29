import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsResult,
} from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '@utilities/middleware/session';
import { IUser } from '@shared/types/user';
import AdminTemplate from '@templates/admin';
import AdmHome from '@app/admin/home';
import { TSSRProps } from '@app/admin/home/types';
import { getSSRProps } from '@app/admin/home/helpers';
// import { guests } from '@mocks/guests';

const AdmHomePage: NextPage<TSSRProps> = ({ serverProps }) => (
  <AdminTemplate user={serverProps?.user as IUser}>
    <AdmHome guestList={serverProps?.guestList} />
  </AdminTemplate>
);

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

// mockado
/*
export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async (ctx) => {
    const user = ctx?.req?.session?.user;
    return {
      props: { serverProps: { user, guestList: guests } },
    } as unknown as GetServerSidePropsResult<{ props: TSSRProps }>;
  },
  sessionOptions
);
*/
