import React from 'react';
import Layout from '../components/layout/layout.js';
import SectionTriple from '../components/sectionTriple/sectionTriple';
import Styles from './contact.module.scss';

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
                <section className={Styles.ContactPage}>
                    <article>
                        <h2>Let’s talk design!</h2>
                        <p>I can’t wait to hear about your design requirements and start creating eye-catching graphics for your business. Schedule a meeting and let’s start the design journey today!</p>
                    </article>
                    <div 
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/tantalizea/design-consultation?hide_event_type_details=1"
                        style={{ minWidth: '320px', height: '650px' }} 
                    />
                </section>
                <SectionTriple/>
            </Layout>
        )
    }
    
    
}

export default ContactPage;