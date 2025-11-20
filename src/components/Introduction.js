import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Introduction() {
    return (
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Project Overview</h2>
                <p className="section-subtitle">
                    This portfolio documents my creative problem-solving journey addressing digital inclusion barriers in public libraries
                </p>
            </div>

            <motion.div
                className="cards-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="card" variants={cardVariants}>
                    <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                    </div>
                    <h3 className="card-title">The Problem</h3>
                    <p className="card-content">
                        Library patrons, particularly older adults and newcomers, experience significant barriers accessing digital services. The current environment creates anxiety, dependency, and social isolation rather than empowerment.
                    </p>
                </motion.div>

                <motion.div className="card" variants={cardVariants}>
                    <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                    </div>
                    <h3 className="card-title">The Challenge</h3>
                    <p className="card-content">
                        How might we transform library users with teaching experience into peer mentors for digital literacy support, creating a sustainable community driven model?
                    </p>
                </motion.div>

                <motion.div className="card" variants={cardVariants}>
                    <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <h3 className="card-title">The Solution</h3>
                    <p className="card-content">
                        The Senior Tech Ambassadors Program: A peer mentorship model that leverages existing community strengths to provide psychological safety, scalable support, and sustainable digital inclusion.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Introduction;
