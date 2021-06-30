import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState(null);
    const [isSubmitFormSuccessful, setIsSubmitFormSuccessful] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key],
                    )}`,
            )
            .join('&');
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...formData,
            }),
        })
            .then(() => setIsSubmitFormSuccessful(true))
            .catch((error) => error);
    };

    return (
        <div className="bg-brand-1 text-white w-full md:w-11/12 p-8 place-self-center md:place-self-end rounded-bl-[2.5rem]">
            <h2 className="leadership-accent text-3xl mb-8">Contact Us</h2>
            {isSubmitFormSuccessful ? (
                <h3 className="text-2xl">
                    We will get in touch with you soon!
                </h3>
            ) : (
                <form
                    className="flex flex-col font-normal text-brand-4"
                    method="post"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    name="contact-form"
                >
                    <label className="hidden" htmlFor="bot-field">
                        <input name="bot-field" />
                    </label>
                    <label htmlFor="name">Name*</label>
                    <input
                        className="mb-4 h-10"
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        className="mb-4 h-10"
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="subject">Subject*</label>
                    <input
                        className="mb-4 h-10"
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Message*</label>
                    <textarea
                        rows="5"
                        className="mb-4 h-10"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        required
                    />
                    <button
                        className="bg-white border-2 border-brand-1 text-brand-1 hover:bg-gray-300 hover:border-gray-300 focus:bg-gray-300 focus:border-gray-300 font-semibold leading-tight px-8 py-2 mb-6 rounded-bl-2xl tracking-[.12rem] transition-colors uppercase w-[135px] self-end"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}
