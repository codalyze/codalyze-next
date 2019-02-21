import React from 'react';
import Home from "./home/Home";
import HomeMobile from "./homeMobile/Home";
import PageWrapper from "../../utils/PageWrapper";

const Page = ({ mq }) => (
    mq === 'desktop' ? <Home /> : <HomeMobile />
);

export default PageWrapper(Page);
