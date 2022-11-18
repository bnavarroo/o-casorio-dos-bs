import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import Home from '@app/home';

const HomePage: NextPage = () => (
  <MainTemplate>
    <Home />
  </MainTemplate>
);

export default HomePage;
