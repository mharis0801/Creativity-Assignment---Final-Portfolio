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

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <motion.nav
            className="nav-bar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-header">
                <div className="nav-logo">
                    <span role="img" aria-label="star">✨</span> Muhammad Haris CPS Portfolio
                </div>
                <button
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <motion.li
                        key={item.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
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
