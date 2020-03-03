import Document, { Head, Main, NextScript } from "next/document";
import Helmet from "react-helmet";

import { ServerStyleSheet } from "styled-components";
import transitionStyles from "../styles/transitions";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, helmet: Helmet.renderStatic() };
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(
        el =>
          el !== "htmlAttributes" && el !== "bodyAttributes" && el !== "title"
      )
      .map(el => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <html lang="en">
        <Head>
        {/* ADD IN YOUR GTM-**** KEY */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-*****');`
            }}
          ></script>
          {/* ^^ ADD IN YOUR GTM-**** KEY ^^ */}
          {this.helmetHeadComponents}
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: transitionStyles }} />
          <meta name="theme-color" content="#55a7a2" />
          <link rel="icon" href="/static/favicon.ico" sizes="120x120" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0"
            data-reactid="4"
          />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <div id="fb-root" />
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="174982912932333"
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
