import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ node }) {
    const { rows } = node;

    return (
        <table className="border-collapse border border-gray-400 table-fixed">
            <tbody>
                {rows.map((row) => {
                    return (
                        <tr className="p-2">
                            {row.cells.map((cell) => {
                                return (
                                    <td className="p-2 border border-gray-400">
                                        {cell}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    node: PropTypes.object.isRequired,
};
