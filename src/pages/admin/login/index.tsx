import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import AdmLogin from '@app/admin/login';

const AdmLoginPage: NextPage = () => (
  <MainTemplate>
    <AdmLogin />
  </MainTemplate>
);

export default AdmLoginPage;
