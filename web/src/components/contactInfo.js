import React from 'react';

export default function ContactInfo() {
    return (
        <div>
            <h2 className="font-bold">Corporate Address</h2>
            <p className="my-4">
                46610 Expedition Dr. Suite 100 Lexington Park, MD 20653
            </p>

            <h2 className="font-bold">Operational Address</h2>
            <p className="mt-4">
                AIRtec Inc.44174 Airport Rd. #300 California, MD 20619
            </p>
            <p>
                <a href="tel:3013732101"> +1 301 373 2101</a>
            </p>
            <p className="text-sm">
                Approximately seven miles from the Naval Air Station, Patuxent
                River, MD.
            </p>
            <br />
            <p className="underline text-brand-5 font-light">
                <a href="mailto:info@flyairtec.com">info@flyairtec.com</a>
            </p>
            <br />
            <p>
                Find us on{' '}
                <a
                    className="underline text-brand-5 font-light"
                    href="https://www.linkedin.com/company/airtec-inc/"
                >
                    LinkedIn
                </a>
            </p>
        </div>
    );
}
