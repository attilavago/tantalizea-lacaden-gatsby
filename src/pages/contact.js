import React from 'react';
import Layout from '../components/layout/layout.js';

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>Contact page content...</p>
            <div className="calendly-inline-widget" data-url="https://calendly.com/tantalizea/design-consultation?hide_event_type_details=1"></div>
        </Layout>
    )
}

export default ContactPage;