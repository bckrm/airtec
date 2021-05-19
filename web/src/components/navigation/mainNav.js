import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="flex">
            {navItems.map((item) => {
                return (
                    <li key={item.link}>
                        <Link to={`${item.link}`}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};
