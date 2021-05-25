import React from 'react';

import Layout from '../components/layout';
import NewsList from '../components/newsList';

export default function IndexPage() {
    return (
        <Layout>
            <h1>index page</h1>
            <NewsList />
        </Layout>
    );
}
