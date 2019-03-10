import React from 'react';
import Home from "./desktop/Home";
import HomeMobile from "./mobile/Home";
import PageWrapper from "../../utils/PageWrapper";

class Page extends React.PureComponent {
    render () {
        return this.props.mq === 'desktop' ? <Home /> : <HomeMobile />
    }
}

export default PageWrapper(Page);
