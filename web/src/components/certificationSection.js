import React from 'react';
import PropTypes from 'prop-types';
import Certification from './certification';

export default function CertificationSection({ certifications }) {
    return (
        <section
            id="certifications"
            className="bg-brand-1 py-14 text-white w-full"
        >
            <div className="container grid grid-col gap-4">
                <h2 className="text-ts-h2 uppercase">Certifications</h2>
                <ul>
                    {certifications.map((item) => {
                        const { node } = item;
                        return <Certification data={node} key={node.id} />;
                    })}
                </ul>
            </div>
        </section>
    );
}

CertificationSection.propTypes = {
    certifications: PropTypes.array.isRequired,
};
