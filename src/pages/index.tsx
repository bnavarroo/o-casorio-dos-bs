import type { GetServerSideProps } from 'next';
import { getSSRProps } from '@app/search/helpers';
import Search from './search';

export default Search;

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  getSSRProps(ctx);
