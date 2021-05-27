import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="flex gap-3 justify-end uppercase mt-16 mr-24">
            {navItems.map((item) => {
                return (
                    <li key={item.link}>
                        <Link className="hover-list" to={`${item.link}`}>
                            {item.name}
                        </Link>
                        <div className="hidden hover-list-link">
                            <Link to={`${item.subnav}`}>{item.sublink}</Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};
