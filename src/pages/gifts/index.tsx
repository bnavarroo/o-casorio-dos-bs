import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import Gifts from '@app/gifts';

const GiftsPage: NextPage = () => (
  <MainTemplate>
    <Gifts />
  </MainTemplate>
);

export default GiftsPage;
