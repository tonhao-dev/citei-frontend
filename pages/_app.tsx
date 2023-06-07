import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Cormorant } from 'next/font/google';
import Head from 'next/head';

const cormorant = Cormorant({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const FontFamilyVariables = () => (
  <style jsx global>{`
    :root {
      --cormorant-font: ${cormorant.style.fontFamily};
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
