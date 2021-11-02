import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './contactForm';
import ContactInfo from './contactInfo';

export default function ContactSection({ data }) {
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 md:gap-8 my-20 md:my-24 gap-8">
            <ContactInfo data={data} />
            <ContactForm />
        </section>
    );
}

ContactSection.propTypes = {
    data: PropTypes.object.isRequired,
};
