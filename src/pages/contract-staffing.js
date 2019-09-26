import ContractStaffing from '../containers/contract-staffing';
import Helmet from 'react-helmet';
import React from 'react';

export default class ContractStaffingPage extends React.Component {
    render () {
        return (
            <>  
                <Helmet
                    title='Contract hire Developers and Data Analysts in Mumbai'
                    meta={[
                        { property: 'og:title', content: 'Contract hire Developers and Data Analysts in Mumbai' },
                        { property: 'description', content: 'Hire pre-interviewed candidates, close openings in less than 15 days' },
                        { property: 'og:description', content: 'Hire pre-interviewed candidates, close openings in less than 15 days' },
                        { property: 'og:image', content: 'https://www.codalyze.com/static/images/selection-share.jpg' },
                        { property: 'og:image:type', content: 'image/png' },
                        { property: 'og:image:width', content: '1200' },
                        { property: 'og:image:height', content: '630' },
                        { property: 'og:url', content: 'https://www.codalyze.com/contract-staffing' },
                        { property: 'og:type', content: 'business.business' },
                        { property: 'twitter:site', content: '@codalyze' },
                        { property: 'twitter:description', content: 'Hire pre-interviewed candidates, close openings in less than 15 days' },
                        { property: 'twitter:image', content: 'https://www.codalyze.com/static/images/selection-share.jpg' },
                        { property: 'twitter:image:alt', content: 'Codalyze Technologies' },
                        { property: 'twitter:title', content: 'Hire developers and data analysts on contract' },
                        { property: 'twitter:description', content: 'Hire pre-interviewed candidates, close openings in less than 15 days' },
                    ]}
                />
                <ContractStaffing {...this.props} />
            </>
        );
    }
}
