import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="stats-grid">
                    <div className="stat-box">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Dedication</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Prototypes</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">∞</span>
                        <span className="stat-label">Possibilities</span>
                    </div>
                </div>
                <p>&copy; Muhammad Haris CPS Portfolio. All rights reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;
