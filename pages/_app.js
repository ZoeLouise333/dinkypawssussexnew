import Head from "next/head";

import "../styles.css";

import "./about/style.css";

import "./reviews/style.css";
import "./services/style.css";
import "./portfolio/style.css";
import "./index/style.css";

import "../components/hamburger/styles.css";

import "../components/header/styles.css";
import "../components/footer/styles.css";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <title>Dinky Paws | Dog Walking | Cat Sitting | Sussex</title>
        <meta property="og:site_name" content="DINKY-PAWS" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/jpg" href="/images/favicon.png" />
        <meta property="og:image" content="/banner.png" />
        <meta
          name="description"
          content="Dinky Paws is a fully insured pet service, based in Uckfield. Services include dog walking, dog/cat sitting, and shortover night stays."
        />
        <meta
          property="og:description"
          content="Dinky Paws is a fully insured pet service, based in Uckfield. Services include dog walking, dog/cat sitting, and shortover night stays."
        />
        <meta
          property="og:title"
          content="Dinky Paws | Dog Walking | Cat Sitting | Sussex"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
