import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactForm></ContactForm>
            <Footer></Footer>

        </div>
    );
};

export default Contact;