import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function IndexPage() {
    return (
        <Layout>
            <Header />
            <h1>index page</h1>
            <Footer />
        </Layout>
    );
}
