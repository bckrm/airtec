import React from 'react';

export default function ContactInfo() {
    return (
        <div className="w-full md:w-11/12">
            <h2 className="font-bold text-3xl">Corporate Address</h2>
            <p className="my-4">
                46610 Expedition Dr. Suite 100 <br />
                Lexington Park, MD 20653
            </p>

            <h2 className="font-bold text-3xl">Operational Address</h2>
            <p className="mt-4">
                AIRtec Inc.44174 Airport Rd. #300
                <br />
                California, MD 20619
            </p>
            <br />
            <p>
                <a href="tel:3013732101"> +1 301 373 2101</a>
            </p>
            <br />
            <p className="text-sm">
                Approximately seven miles from the Naval Air Station, Patuxent
                River, MD.
            </p>

            <p className="font-light text-brand-4 my-8 underline">
                <a href="mailto:info@flyairtec.com">info@flyairtec.com</a>
            </p>
            <p>
                Find us on{' '}
                <a
                    className="underline text-brand-4 font-light"
                    href="https://www.linkedin.com/company/airtec-inc/"
                >
                    LinkedIn
                </a>
            </p>
        </div>
    );
}
