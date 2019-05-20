import React from 'react';
import Layout from '../components/layout/layout.js';

class ContactPage extends React.Component {
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }

    render() {
        return (
            <Layout>
                <h1>Contact</h1>
                <p>Contact page content...</p>
                <div 
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/tantalizea/design-consultation?hide_event_type_details=1"
                    style={{ minWidth: '320px', height: '580px' }} 
                />
            </Layout>
        )
    }
    
    
}

export default ContactPage;