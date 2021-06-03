import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="hidden lg:flex font-semibold gap-3 justify-end mt-16 mr-24 text-white uppercase">
            {navItems.map((item) => {
                return (
                    <li key={item.link} className="group relative">
                        <Link className="block" to={`${item.link}`}>
                            {item.name}
                        </Link>
                        <ul className="absolute">
                            {item.subnav
                                ? item.subnav.map((subitem) => {
                                      return (
                                          <li key={subitem.sublink}>
                                              <Link
                                                  className="block invisible p-2 pointer-events-none group-hover:pointer-events-auto group-hover:visible group-focus:visible text-brand-1 bg-brand-5 hover:bg-brand-4"
                                                  to={`${subitem.subnav}`}
                                              >
                                                  {subitem.sublink}
                                              </Link>
                                          </li>
                                      );
                                  })
                                : ''}
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
