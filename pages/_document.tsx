import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
         <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="description"
            content="Teach you anything in seconds use AI."
          />
          <meta
            property="og:description"
            content="Teach you anything in seconds use AI."
          />
          <meta property="og:title" content="Teach Anything" />
          <meta
            name="twitter:description"
            content="Teach you anything in seconds use AI."
          />
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
