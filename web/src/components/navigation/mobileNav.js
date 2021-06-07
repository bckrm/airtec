import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MobileNav({
    navItems,
    isMobileNavOpen,
    handleNavToggle,
}) {
    const colorStyle = isMobileNavOpen ? 'bg-black' : 'bg-white';

    const navActiveStyles = isMobileNavOpen
        ? 'translate-x-0'
        : 'translate-x-full';

    const firstSpanStyles = isMobileNavOpen
        ? '-rotate-45 w-10'
        : 'rotate-0 w-11';

    const secondSpanStyles = isMobileNavOpen
        ? 'opacity-0 w-0'
        : 'opacity-100 w-8';

    const thirdSpanStyles = isMobileNavOpen ? 'rotate-45 w-10' : 'rotate-0 w-5';

    return (
        <>
            <button
                className="absolute flex flex-col justify-between items-end lg:hidden h-8 w-10 right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10"
                type="button"
                onClick={handleNavToggle}
            >
                <span
                    className={`h-1 rounded-full transform-gpu transition transition-all duration-300 origin-right ${firstSpanStyles} ${colorStyle}`}
                    isMobileNavOpen={isMobileNavOpen}
                />
                <span
                    className={`h-1 rounded-full transform-gpu transition transition-all duration-300 origin-right ${secondSpanStyles} ${colorStyle}`}
                    isMobileNavOpen={isMobileNavOpen}
                />
                <span
                    className={`h-1 rounded-full transform-gpu transition transition-all duration-300 origin-right ${thirdSpanStyles} ${colorStyle}`}
                    isMobileNavOpen={isMobileNavOpen}
                />
            </button>
            <ul
                className={` absolute bg-white text-black right-0 lg:hidden min-h-screen w-max flex flex-col items-end transform ${navActiveStyles} transition pr-4 pt-32 top-0 text-right w-1/2`}
            >
                {navItems.map((item) => {
                    return (
                        <li
                            className="capitalize text-black font-bold ml-8 mb-10 transition-colors duration-700 ease-in-out relative text-xl"
                            key={item.name}
                        >
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

MobileNav.propTypes = {
    handleNavToggle: PropTypes.func.isRequired,
    navItems: PropTypes.array.isRequired,
    isMobileNavOpen: PropTypes.bool.isRequired,
};
