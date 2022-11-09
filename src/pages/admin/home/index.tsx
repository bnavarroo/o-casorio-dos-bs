import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import AdmHome from '@app/admin/home';

const AdmHomePage: NextPage = () => (
  <MainTemplate>
    <AdmHome />
  </MainTemplate>
);

export default AdmHomePage;
