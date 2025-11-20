import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection, scrollToSection }) => {
    const navItems = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'process', label: 'Process' },
        { id: 'prototype', label: 'Prototype' },
        { id: 'reflection', label: 'Reflection' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    return (
        <motion.nav
            className="nav-bar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-logo">
                <span role="img" aria-label="star">✨</span> Muhammad Haris CPS Portfolio
            </div>
            <ul className="nav-links">
                {navItems.map((item) => (
                    <motion.li
                        key={item.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.id)}
                            style={{ background: 'none', border: 'none', fontSize: '1rem' }}
                        >
                            {item.label}
                        </button>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navigation;
