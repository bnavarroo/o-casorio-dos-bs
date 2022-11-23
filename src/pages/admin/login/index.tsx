import type { NextPage } from 'next';
import AdminTemplate from '@templates/admin';
import AdmLogin from '@app/admin/login';

const AdmLoginPage: NextPage = () => (
  <AdminTemplate>
    <AdmLogin />
  </AdminTemplate>
);

export default AdmLoginPage;
