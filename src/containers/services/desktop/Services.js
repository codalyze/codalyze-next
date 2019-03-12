import React from 'react';
import HomeBanner from "../../../components/HomeBanner";
import * as Styled from './styles';
import Bg1 from './images/Bg1';
import Bg2 from './images/Bg2';
import Sections from './Sections';
import Footer from '../../../components/footer';

import Service1 from './images/Service1';

import dynamic from 'next/dynamic'

const Service2 = dynamic(() => import('./images/Service2'), {loading: () => null});

import LazySvgLoader from '../../../components/LazySvgLoader';

export default class Services extends React.PureComponent {

  render () {
    return (
      <Styled.pageWrapper>
        <Styled.bannerSvg>
          <Bg1 width="100%" height="100%" viewBox="0 0 2010.541 1631.315"/>
        </Styled.bannerSvg>
        <HomeBanner
          title="Our Services"
          subTitle="We offer services in following verticals"
          banner="/static/images/services/banner.png"
          // BannerSvg={() => <LazySvgLoader FirstImage={Service1} LazyImage={Service2} isMobile={this.props.mq === 'mobile'}/>}
        />
        <Sections />
        <Styled.bottomSvg>
          <Bg2 width="100%" height="100%" viewBox="0 0 1597.776 1603.587"/>
        </Styled.bottomSvg>
        <Footer />
      </Styled.pageWrapper>
    )
  }
}
