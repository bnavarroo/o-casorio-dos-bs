import type { NextPage } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '@utilities/middleware/session';
import AdminTemplate from '@templates/admin';
import AdmHome from '@app/admin/home';
import { TUserFromServer, IUser } from '@shared/types/user';

const AdmHomePage: NextPage<TUserFromServer> = ({ serverProps }) => (
  <AdminTemplate user={serverProps?.user as IUser}>
    <AdmHome />
  </AdminTemplate>
);

export default AdmHomePage;

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => ({
    props: {
      serverProps: {
        user: req?.session?.user,
      },
    },
  }),
  sessionOptions
);
