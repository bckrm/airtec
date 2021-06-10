import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './historyItem';
import Button from './button';

export default function History({ years }) {
    const [activeTab, setActiveTab] = useState(years[0].id);

    return (
        <section className="container my-24">
            <h2 className="uppercase text-ts-h2 mb-4">History</h2>
            <div>
                <div className="flex gap-20">
                    {years.map((year) => {
                        return window.innerWidth > 600 ? (
                            <button
                                type="button"
                                onClick={() => setActiveTab(year.id)}
                                key={year.id}
                                isActive={activeTab === year.id}
                                className={
                                    year.id === activeTab
                                        ? 'underline font-bold'
                                        : ''
                                }
                            >
                                {year.year}
                            </button>
                        ) : (
                            <Button />
                        );
                    })}
                </div>
                {years.map((year) => {
                    return (
                        <HistoryItem
                            data={year}
                            isOpen={activeTab === year.id}
                            key={year.id}
                            isActive={year.id === activeTab}
                        />
                    );
                })}
            </div>
        </section>
    );
}

History.propTypes = {
    years: PropTypes.array.isRequired,
};
