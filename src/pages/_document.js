import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import transitionStyles from '../styles/transitions';

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
          <style dangerouslySetInnerHTML={{ __html: transitionStyles }} />
          <meta name="theme-color" content="#55a7a2" />
          <link rel="icon" href="/static/favicon.ico" sizes="120x120" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" data-reactid="4"></meta>
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
