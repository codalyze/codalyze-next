import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import { PageTransition } from 'next-page-transitions';
import Header from "../components/Header";
import Transition from '../components/Transition';
import UAParser from 'ua-parser-js';
import loadWebFonts from '../utils/loadWebFonts';

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

    if (newPosition) this.state = {...newPosition};
  }

  get pathname () {
    return this.props.router.pathname;
  }

  componentDidMount () {
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    window.addEventListener('resize', this.onResize);
    this.handleRouteChangeStart(this.pathname);
    this.setState({className: 'app-body'});
    loadWebFonts();
  }

  componentWillUnmount () {
    Router.events.off('routeChangeStart', this.handleRouteChangeStart);
    window.removeEventListener('resize', this.onResize);
  }

  componentDidUpdate () {
    this.handleRouteChangeStart(this.pathname);
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