import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import NotFound from '@app/404';

const NotFoundPage: NextPage = () => (
  <MainTemplate>
    <NotFound />
  </MainTemplate>
);

export default NotFoundPage;
