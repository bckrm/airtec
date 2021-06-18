import React from 'react';

export default function ContactForm() {
    return (
        <div className="bg-brand-1 text-white w-80 md:w-[30rem] p-8 rounded-bl-[2.5rem]">
            <h2 className="leadership-accent text-3xl mb-8">Contact Us</h2>
            <form className="flex flex-col font-normal text-brand-4">
                <label htmlFor="name">Name*</label>
                <input
                    className="mb-4 h-10"
                    type="text"
                    id="name"
                    name="name"
                />
                <label htmlFor="email">Email*</label>
                <input
                    className="mb-4 h-10"
                    type="text"
                    id="email"
                    name="email"
                />
                <label htmlFor="subject">Subject*</label>
                <input
                    className="mb-4 h-10"
                    type="text"
                    id="subject"
                    name="subject"
                />
                <label htmlFor="message">Message*</label>
                <input
                    className="mb-4 h-10"
                    type="text"
                    id="message"
                    name="message"
                />
                <button
                    className="bg-white border-2 border-brand-1 text-brand-1 hover:bg-gray-300 hover:border-gray-300 focus:bg-gray-300 focus:border-gray-300 font-semibold leading-tight px-8 py-2 mb-6 rounded-bl-2xl tracking-[.12rem] transition-colors place-self-end justify-self-end uppercase w-[135px]"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
