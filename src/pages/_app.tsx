import App from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <main className="page-container">
      <link
        href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
