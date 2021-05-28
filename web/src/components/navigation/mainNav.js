import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems, subNavItems }) {
    return (
        <ul className="flex font-semibold gap-3 justify-end mt-16 mr-24 text-white uppercase">
            {navItems.map((item) => {
                return (
                    <li key={item.link} className="group">
                        <Link
                            className="hover-list group-hover:block"
                            to={`${item.link}`}
                        >
                            {item.name}
                        </Link>
                        <ul>
                            {subNavItems.map((subitem) => {
                                return (
                                    <li key={subitem.link}>
                                        <Link
                                            className={`hover-list-link group-hover:block text-brand-1 group-hover:bg-${item.sublinkcolor}`}
                                            to={`${subitem.subnav}`}
                                        >
                                            {subitem.sublink}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
    subNavItems: PropTypes.array.isRequired,
};
