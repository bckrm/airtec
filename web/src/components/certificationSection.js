import React from 'react';
import PropTypes from 'prop-types';
import Certification from './certification';

export default function CertificationSection({ certifications }) {
    return (
        <section className="bg-brand-1 py-14 text-white w-full">
            <div className="container grid grid-col gap-4">
                <h2 className="text-ts-h2 uppercase">Certifications</h2>
                {certifications.map((certification) => {
                    return <Certification data={certification} />;
                })}
            </div>
        </section>
    );
}

CertificationSection.propTypes = {
    certifications: PropTypes.array.isRequired,
};
