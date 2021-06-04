import React from 'react';
import PropTypes from 'prop-types';
// import HistoryItem from './historyItem';

export default function History({ history }) {
    return (
        <section className="container my-24">
            <h2 className="uppercase text-ts-h2 mb-4">History</h2>
            <div>
                <div className="flex gap-20">
                    {history.map((year) => {
                        return <h3>{year.year}</h3>;
                    })}
                </div>
                {/* {history.map((year) => {
                    return <HistoryItem data={year} key={year} />;
                })} */}
            </div>
        </section>
    );
}

History.propTypes = {
    history: PropTypes.array.isRequired,
};
