import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

export default function HistoryItem({ data, isOpen, isActive }) {
    const { historyText, image } = data;
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
                        <img
                            className="w-full md:w-1/2"
                            src={imageUrlFor(buildImageObj(image))
                                .width(1200)
                                .height(Math.floor((9 / 16) * 1200))
                                .fit('fill')
                                .auto('format')
                                .url()}
                            alt=""
                        />
                        <p className="w-full md:w-1/2">{historyText}</p>
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
