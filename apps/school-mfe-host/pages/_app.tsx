import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '../Components/AppLayout';
import themeConfig from '../config/theme-config';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stable Micro Frontend</title>
      </Head>
      <main className="app">
        <ThemeProvider theme={themeConfig}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
