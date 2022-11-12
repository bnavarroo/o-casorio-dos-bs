import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import Gifts from '@app/gitfs';

const GiftsPage: NextPage = () => (
  <MainTemplate>
    <Gifts />
  </MainTemplate>
);

export default GiftsPage;
