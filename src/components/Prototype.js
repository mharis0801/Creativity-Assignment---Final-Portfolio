import React from 'react';
import { motion } from 'framer-motion';

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

function Prototype() {
    return (
        <section className="prototype-showcase">
            <div className="section-header">
                <h2 className="section-title" style={{ color: 'white' }}>Solution Prototype</h2>
                <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    The Senior Tech Ambassadors Program
                </p>
            </div>

            <div className="prototype-container">
                <h3 className="prototype-title">Program Overview</h3>

                <div className="prototype-description">
                    <h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                        What It Is
                    </h4>
                    <p style={{ marginBottom: '1.5rem' }}>
                        A structured program to identify, train, and certify library users with teaching backgrounds to become official "Senior Tech Ambassadors" who provide peer-to-peer digital literacy support.
                    </p>

                    <h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Key Components
                    </h4>
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span><strong>Recruitment:</strong> Identify library users with teaching/mentoring experience or strong digital skills</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span><strong>Training:</strong> 4 week certification program covering digital literacy instruction, empathy, and peer support techniques</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span><strong>Deployment:</strong> Ambassadors available during dedicated hours, wearing identifying badges</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span><strong>Support:</strong> Ongoing coordination by library staff, monthly meetings, and continuous learning</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span><strong>Recognition:</strong> Official certification, community recognition events, and achievement tracking</span>
                        </motion.li>
                    </motion.ul>

                    <h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                        </svg>
                        Expected Impact
                    </h4>
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                            <span><strong>Scalability:</strong> Each ambassador can support 10-15 users per month</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span><strong>Staff Efficiency:</strong> Reduce staff tech support time from 40% to 15%</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span><strong>Community Building:</strong> Create peer networks and reduce social isolation</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span><strong>User Empowerment:</strong> Transform help seekers into help providers</span>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            <span><strong>Psychological Safety:</strong> Peer relationships reduce anxiety and shame</span>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}

export default Prototype;
