import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MobileNav({
    navItems,
    isMobileNavOpen,
    handleNavToggle,
}) {
    const navActiveStyles = isMobileNavOpen
        ? '-translate-x-0'
        : 'translate-x-full';
    const colorStyle = isMobileNavOpen ? 'bg-black' : 'bg-white';

    const firstSpanStyles = isMobileNavOpen ? '-rotate-45' : 'rotate-0';
    const secondSpanStyles = isMobileNavOpen
        ? 'opacity-0 w-0'
        : 'opacity-100 w-full';
    const thirdSpanStyles = isMobileNavOpen ? 'rotate-45' : 'rotate-0';

    return (
        <>
            <button
                className="flex flex-col justify-between items-end md:hidden h-8 right-0 top-1/2 transform translate-y-[150%] translate-x-full z-10"
                type="button"
                onClick={handleNavToggle}
            >
                <span
                    className={`h-1 rounded-full transform-gpu w-11 transition transition-all duration-300 origin-right ${firstSpanStyles} ${colorStyle}`}
                    isMobileNavOpen={isMobileNavOpen}
                />
                <span
                    className={`h-1 rounded-full transform-gpu w-8 transition transition-all duration-300 origin-right ${secondSpanStyles} ${colorStyle}`}
                    isMobileNavOpen={isMobileNavOpen}
                />
                <span
                    className={`h-1 rounded-full transform-gpu w-5 transition transition-all duration-300 origin-right ${thirdSpanStyles} ${colorStyle}`}
                    isMobileNavOpen={isMobileNavOpen}
                />
            </button>
            <ul
                className={` bg-white text-black right-0 lg:hidden min-h-screen w-max flex flex-col items-end transform ${navActiveStyles} transition pr-4 pt-32 top-0 text-right w-1/2`}
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
