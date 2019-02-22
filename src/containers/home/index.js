import React from 'react';
import Home from "./desktop/Home";
import HomeMobile from "./mobile/Home";
import PageWrapper from "../../utils/PageWrapper";

const Page = ({ mq }) => (
    mq === 'desktop' ? <Home /> : <HomeMobile />
);

export default PageWrapper(Page);
