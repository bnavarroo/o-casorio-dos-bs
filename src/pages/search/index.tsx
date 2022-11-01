import type { NextPage, GetServerSideProps } from 'next';
import MainTemplate from '@templates/main';
import Search from '@app/search';
import { getSSRProps } from '@app/search/helpers';
import { TGuestFromServer } from '@shared/types/guest';

const SearchPage: NextPage<TGuestFromServer> = ({ serverProps }) => (
  <MainTemplate>
    <Search persistedGuest={serverProps?.persistedGuest} id={serverProps?.id} />
  </MainTemplate>
);

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  getSSRProps(ctx);
