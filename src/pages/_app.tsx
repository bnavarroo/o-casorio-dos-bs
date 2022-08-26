import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import AppTheme from '@styles/theme';
import GlobalStyle from '@styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={AppTheme}>
    <Head>
      <title>O Casório dos Bs</title>
      <meta name="description" content="Casamento Bruno & Bruna" />
    </Head>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
