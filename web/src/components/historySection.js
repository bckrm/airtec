import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './historyItem';

export default function History({ history }) {
    const [activeTab, setActiveTab] = useState(history[0].id);

    // const activeStyle = isActive ? 'font-bold underline' : '';

    return (
        <section className="container my-24">
            <h2 className="uppercase text-ts-h2 mb-4">History</h2>
            <div>
                <div className="flex gap-20">
                    {history.map((year) => {
                        return (
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
                        );
                    })}
                </div>
                {history.map((year) => {
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
    history: PropTypes.array.isRequired,
};
