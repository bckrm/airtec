import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="flex font-semibold gap-3 justify-end mt-16 mr-24 text-white uppercase">
            {navItems.map((item) => {
                return (
                    <li key={item.link}>
                        <Link className="hover-list" to={`${item.link}`}>
                            {item.name}
                        </Link>
                        <Link
                            className={`hover-list-link text-brand-1 bg-${item.sublinkcolor}`}
                            to={`${item.subnav}`}
                        >
                            {item.sublink}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};
