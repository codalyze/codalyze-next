import App, { Container } from 'next/app';
import React from 'react';
import { PageTransition } from 'next-page-transitions';
import Helmet from 'react-helmet';

import Header from "../components/Header";
import Transition from '../components/Transition';
import UAParser from 'ua-parser-js';
import loadWebFonts from '../utils/loadWebFonts';
import initFreshChat from '../utils/initFreshChat';
import ReactGA from 'react-ga';

export default class MyApp extends App {
  constructor (props) {
    super(props);

    this.linkRefs = new Map();

    this.state = {
      top: 10,
      markerWidth: 2,
      left: 0,
      right: '-10px',
      href: '',
      className: ''
    };

    const newPosition = this.calculatePosition(props.router.pathname);
    this.onResize = this.onResize.bind(this);
    this.lastPathName = props.router.pathname;

    if (newPosition) this.state = {...newPosition};
  }

  get pathname () {
    return this.props.router.pathname;
  }

  componentDidMount () {
    ReactGA.initialize('UA-82744542-1');
    window.addEventListener('resize', this.onResize);
    this.handleRouteChangeStart(this.pathname);
    this.setState({className: 'app-body'});
    loadWebFonts();
    initFreshChat();

    const options = {
      autoConfig: true, 	// set pixel's autoConfig
      debug: true, 		// enable logs
    };
    const ReactPixel =  require('react-facebook-pixel').default;
    ReactPixel.init('894109900975518', {}, options);
    ReactPixel.pageView();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  componentDidUpdate () {
    if (this.lastPathName !== this.pathname) {
      this.lastPathName = this.pathname;
      this.handleRouteChangeStart(this.pathname);
      const ReactPixel =  require('react-facebook-pixel').default;
      ReactPixel.pageView();
    }
  }

  componentDidCatch (x) {
    console.log(x);
  }

  onResize () {
    const newPosition = this.calculatePosition(this.pathname);
    this.setState(newPosition);
  }

  calculatePosition (url) {
    if (url === '/') {
      if (typeof window === 'undefined' || !this.linkRefs.get('work')) {
        return {left: 'unset', right: '-10px', top: 35.769229888916016, markerWidth: 20, href: ''};
      } else {
        const ref = this.linkRefs.get('work');
        const {top} = ref.getBoundingClientRect();
        return {top, markerWidth: 5, left: window.innerWidth - 50, href: 'index', right: 'unset'};
      }
    }
    const href = url.split('/')[1];
    const ref = this.linkRefs.get(href);

    if (!ref) return;

    const {top, width: markerWidth, left} = ref.getBoundingClientRect();

    return {top, markerWidth, left, href, right: 'unset'};
  }

  handleRouteChangeStart = (r) => {
    ReactGA.pageview(r);
    const newPosition = this.calculatePosition(r);
    if (!newPosition || newPosition.href === this.state.href) return;
    this.setState({...newPosition, markerWidth: 10, left: newPosition.left + newPosition.markerWidth / 2 - 5});

    setTimeout(() => {
      this.setState(newPosition);
    }, 500);
  }

  addRef = (href, ref) => {
    this.linkRefs.set(href, ref);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let mq = 'mobile';
    if (ctx.req && ctx.req.headers['user-agent']) {
      const parsedUa = new UAParser(ctx.req.headers['user-agent']);
      if (parsedUa && parsedUa.getDevice() && parsedUa.getDevice().type !== 'mobile' && parsedUa.getDevice().type !== 'tablet') {
        mq = 'desktop';
      }
    }
    pageProps.mq = mq;

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Helmet
          title='Codalyze Tech | Web and Mobile Development | React / React Native / NodeJS'
          meta={[
            { property: 'og:title', content: 'Codalyze Tech | Web and Mobile Development | React / React Native / NodeJS' },
            { property: 'description', content: 'We are a small team of awesome JavaScript developers. Get your web and mobile apps developed at Codalyze.' },
            { property: 'og:description', content: 'We are a small team of awesome JavaScript developers. Get your web and mobile apps developed at Codalyze.' },
            { property: 'og:image', content: 'https://www.codalyze.com/fb-share-2.png' },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:url', content: 'https://www.codalyze.com' },
            { property: 'og:type', content: 'business.business' },
            { property: 'twitter:site', content: '@codalyze' },
            { property: 'twitter:description', content: 'We are a small team of awesome JavaScript developers. Get your web and mobile apps developed at Codalyze.' },
            { property: 'twitter:image', content: 'https://www.codalyze.com/fb-share-2.png' },
            { property: 'twitter:image:alt', content: 'Codalyze Technologies' },
            { property: 'twitter:title', content: 'Codalyze Tech | Web and Mobile Development | React / React Native / NodeJS' },
            { property: 'twitter:description', content: 'We are a small team of awesome JavaScript developers. Get your web and mobile apps developed at Codalyze.' },
          ]}
        />
        <Header {...this.state} addRef={this.addRef} {...pageProps} />
        <PageTransition timeout={500} classNames="page-transition">
          <React.Fragment key={this.props.router.route}>
            <Transition />
            <div className={this.state.className}>
              <Component {...pageProps} />
            </div>
          </React.Fragment>
        </PageTransition>
      </Container>
    )
  }
}