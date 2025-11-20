import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Conclusion() {
    return (
        <section className="section section-alt">
            <div className="section-header">
                <h2 className="section-title">Conclusion</h2>
                <p className="section-subtitle">
                    Key takeaways from the creative problem-solving experience
                </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    className="cards-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                        </div>
                        <h3 className="card-title">Process Over Product</h3>
                        <p className="card-content">
                            The systematic CPS methodology observation, empathy, analysis, ideation yielded insights I never would have reached through intuition alone. Trusting the process, even when uncertain, led to transformative solutions.
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={cardVariants}>
                        <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="card-title">Community as Resource</h3>
                        <p className="card-content">
                            The most sustainable solutions leverage existing community strengths rather than importing external expertise. People experiencing problems often hold the keys to solving them, if we create conditions for their empowerment.
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={cardVariants}>
                        <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <h3 className="card-title">Empathy as Foundation</h3>
                        <p className="card-content">
                            Deep empathy reveals root causes that surface level observation misses. Margaret's emotional journey anxiety, shame, desire to help provided the insight that transformed how I framed the entire problem.
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={cardVariants}>
                        <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #fa709a, #fee140)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </div>
                        <h3 className="card-title">Constraints as Creativity</h3>
                        <p className="card-content">
                            The library's staff time constraints and resource limitations weren't barriers, they were creative catalysts that forced innovative thinking toward peer based models that traditional approaches would have overlooked.
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={cardVariants}>
                        <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #30cfd0, #330867)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <polyline points="23 4 23 10 17 10" />
                                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                            </svg>
                        </div>
                        <h3 className="card-title">Iteration as Growth</h3>
                        <p className="card-content">
                            Each stage built upon previous insights. My initial problem definition evolved significantly through research and analysis. Creative problem-solving is inherently iterative, embracing this rather than seeking perfect first attempts is essential.
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={cardVariants}>
                        <div className="card-icon-badge" style={{ background: 'linear-gradient(135deg, #a8edea, #fed6e3)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                            </svg>
                        </div>
                        <h3 className="card-title">Impact Potential</h3>
                        <p className="card-content">
                            This solution could transform not just one library but serve as a replicable model for public institutions serving diverse communities. The principles leverage community strengths, create psychological safety, enable peer support, and apply far beyond digital literacy.
                        </p>
                    </motion.div>
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '2rem' }}>
                        This creative problem-solving journey has equipped me with a methodology I'll carry forward into future challenges, both professional and personal. The ability to observe deeply, empathize genuinely, analyze systematically, and ideate courageously represents a transformative skillset that transcends any single problem domain.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Conclusion;
