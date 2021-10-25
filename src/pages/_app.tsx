import React from 'react';
import { SWRConfig } from 'swr';

/*
 * TODO: Ignore this page. It is only for setting up CSS
 *  and a data fetching method.
 */

function MyApp({ Component, pageProps }) {
  return (
    <main className="page-container">
      <link
        href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
        rel="stylesheet"
      />
      <SWRConfig
        value={{
          fetcher: (url) => fetch(url).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </main>
  );
}

export default MyApp;
