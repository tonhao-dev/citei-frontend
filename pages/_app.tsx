import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const FontFamilyVariables = () => (
  <style jsx global>{`
    :root {
      --roboto-font: ${roboto.style.fontFamily};
    }
  `}</style>
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Citei - Torne-se um dev by the book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FontFamilyVariables />
      <Component {...pageProps} />
    </>
  );
}
