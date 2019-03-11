import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" data-reactid="4"></meta>
          <link rel="manifest" href="/static/manifest.json" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"></link>

          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
