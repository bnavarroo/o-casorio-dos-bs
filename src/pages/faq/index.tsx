import type { NextPage } from 'next';
import MainTemplate from '@templates/main';
import Faq from '@app/faq';

const FaqPage: NextPage = () => (
  <MainTemplate>
    <Faq />
  </MainTemplate>
);

export default FaqPage;
