import App, { Container } from 'next/app';
import React from 'react';
import Router, { withRouter } from 'next/router';
import { PageTransition } from 'next-page-transitions';
import Header from "../components/Header";
import Transition from '../components/Transition';
import '../styles/transitions.scss';
 
export default class MyApp extends App {
  constructor (props) {
    super(props);

    this.linkRefs = new Map();

    this.state = {
      top: 10,
      width: 2,
      left: 0,
      right: '-10px',
      href: ''
    };

    const newPosition = this.calculatePosition(props.router.pathname);

    if (newPosition) this.state = {...newPosition};
  }

  get pathname () {
    return this.props.router.pathname;
  }

  componentDidMount () {
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    this.handleRouteChangeStart(this.pathname);
  }

  componentWillUnmount () {
    Router.events.off('routeChangeStart', this.handleRouteChangeStart);
  }

  componentDidUpdate () {
    this.handleRouteChangeStart(this.pathname);
  }

  calculatePosition (url) {
    if (url === '/') {
      if (typeof window === 'undefined' || !this.linkRefs.get('work')) {
        return {left: 'unset', right: '-10px', top: 35.769229888916016, width: 20, href: ''};
      } else {
        const ref = this.linkRefs.get('work');
        const {top} = ref.getBoundingClientRect();
        return {top, width: 5, left: window.innerWidth - 50, href: 'index', right: 'unset'};
      }
    }
    const href = url.split('/')[1];
    const ref = this.linkRefs.get(href);

    if (!ref) return;

    const {top, width, left} = ref.getBoundingClientRect();
    
    return {top, width, left, href, right: 'unset'};
  }

  handleRouteChangeStart = (r) => {
    const newPosition = this.calculatePosition(r);
    if (!newPosition || newPosition.href === this.state.href) return;
    this.setState({...newPosition, width: 10, left: newPosition.left + newPosition.width / 2 - 5});

    setTimeout(() => {
      this.setState(newPosition);
    }, 500);
  }

  addRef = (href, ref) => {
    this.linkRefs.set(href, ref);
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
 
    return { pageProps }
  }
 
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Header {...this.state} addRef={this.addRef} />
        <PageTransition timeout={500} classNames="page-transition">
          <React.Fragment key={this.props.router.route}>
            <Transition />
            <div className="app-body">
              <Component {...pageProps} />
            </div>
          </React.Fragment>
        </PageTransition>
      </Container>
    )
  }
}