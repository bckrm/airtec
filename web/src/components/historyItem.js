import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { motion, AnimatePresence } from 'framer-motion';

export default function HistoryItem({ data, isOpen, isActive }) {
    const {
        text,
        image: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                >
                    <div
                        isActive={isActive}
                        className="flex flex-col-reverse md:flex-row-reverse gap-11 pt-6 md:pt-9"
                    >
                        <Img className="w-full md:w-1/2" fluid={fluid} />
                        <p className="w-full md:w-1/2">{text}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

HistoryItem.propTypes = {
    data: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
};
