import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="flex font-semibold gap-3 justify-end mt-16 mr-24 text-white uppercase">
            {navItems.map((item, i) => {
                return (
                    <li key={item.link} className="group relative">
                        <Link
                            className="hover-list group-hover:block"
                            to={`${item.link}`}
                        >
                            {item.name}
                        </Link>
                        <ul className="absolute">
                            {navItems[i].subnav
                                ? navItems[i].subnav.map((subitem) => {
                                      return (
                                          <li key={subitem.sublink}>
                                              <Link
                                                  className="hover-list-link p-2 group-hover:block text-brand-1 bg-brand-5 hover:bg-brand-4"
                                                  to={`${subitem.subnav}`}
                                              >
                                                  {subitem.sublink}
                                              </Link>
                                          </li>
                                      );
                                  })
                                : ' '}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};
