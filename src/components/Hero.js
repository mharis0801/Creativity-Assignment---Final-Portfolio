import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span role="img" aria-label="rocket">🚀</span>  Muhammad Haris CPS Portfolio
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Designing the Future of <br /> Problem Solving
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    My journey through creative problem solving, prototyping, and innovation.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
