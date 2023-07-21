// pages/_app.js
import Head from 'next/head';
import Script from 'next/script';
import './main.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/app-icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/app-icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/app-icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/app-icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/app-icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/assets/app-icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/assets/app-icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11174818901"
      />
      <Script id="gtagAdwordsScript">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11174818901');
            `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
