import React from 'react';

import ContactForm from './contactForm';
import ContactInfo from './contactInfo';

export default function ContactSection() {
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 md:gap-8 my-20 md:my-24 gap-8">
            <ContactInfo />
            <ContactForm />
        </section>
    );
}
