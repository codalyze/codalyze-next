import Blogs from "../containers/blogs";
import Helmet from 'react-helmet';
import React from 'react';

export default class BlogsPage extends React.Component {
    render () {
        return (
            <>  
                <Helmet
                    title='Codalyze Technologies named 2019 Clutch Leader!'
                    meta={[
                        { property: 'og:title', content: 'Codalyze Technologies named 2019 Clutch Leader!' },
                        { property: 'description', content: 'We are a small group of JavaScript developers based out of Mumbai' },
                        { property: 'og:description', content: 'We are a small group of JavaScript developers based out of Mumbai' },
                        { property: 'og:image', content: 'https://www.codalyze.com/fb-share-2.png' },
                        { property: 'og:image:type', content: 'image/png' },
                        { property: 'og:image:width', content: '1200' },
                        { property: 'og:image:height', content: '630' },
                        { property: 'og:url', content: 'https://www.codalyze.com/clutch-leader' },
                        { property: 'og:type', content: 'business.business' },
                        { property: 'twitter:site', content: '@codalyze' },
                        { property: 'twitter:description', content: 'We are a small group of JavaScript developers based out of Mumbai' },
                        { property: 'twitter:image', content: 'https://www.codalyze.com/fb-share-2.png' },
                        { property: 'twitter:image:alt', content: 'Codalyze Technologies' },
                        { property: 'twitter:title', content: 'Codalyze Technologies named 2019 Clutch Leader!' },
                        { property: 'twitter:description', content: 'We are a small group of JavaScript developers based out of Mumbai' },
                    ]}
                />
                <Blogs {...this.props} />
            </>
        );
    }
}
