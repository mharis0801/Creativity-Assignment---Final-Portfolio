import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

function ProcessSummary() {
    return (
        <section className="section section-alt">
            <div className="section-header">
                <h2 className="section-title">The Creative Journey</h2>
                <p className="section-subtitle">
                    Four phases of discovery, research, analysis, and ideation
                </p>
            </div>

            <motion.div
                className="timeline"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="timeline-item" variants={itemVariants}>
                    <div className="timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Part 1: Spot the Problem</h3>
                        <p className="timeline-text">
                            <strong>Location:</strong> Mississauga Central Library<br /><br />
                            Through systematic observation, I identified a complex problem involving the intersection of digital literacy gaps, spatial design conflicts, and competing user needs. Multiple user groups like older adults, newcomers, job seekers, and students experience different aspects of the same underlying issue: a system designed for uniform users serving an increasingly diverse population.
                            <br /><br />
                            <strong>Key Insight:</strong> The problem stems from systemic design failures, not individual user deficits.
                        </p>
                    </div>
                </motion.div>

                <motion.div className="timeline-item" variants={itemVariants}>
                    <div className="timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Part 2: Research the Problem</h3>
                        <p className="timeline-text">
                            <strong>Empathy Interview:</strong> Margaret, a 67 year old retired teacher<br /><br />
                            The interview revealed that challenges are primarily emotional and environmental rather than technical. Margaret's "heart racing" response, avoidance behaviors, and strategic coping mechanisms demonstrated how public settings amplify anxiety. Most critically, she expressed a desire to help others once she gained confidence.
                            <br /><br />
                            <strong>Secondary Research:</strong> Studies confirmed that 42% of Toronto residents lack home internet, 87% experience fear/anxiety as the primary barrier, and peer support models show 89% retention vs. 52% for instructor led programs.
                        </p>
                    </div>
                </motion.div>

                <motion.div className="timeline-item" variants={itemVariants}>
                    <div className="timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                    </div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Part 3: Define the Problem</h3>
                        <p className="timeline-text">
                            <strong>Analysis Tool:</strong> Fishbone Diagram<br /><br />
                            Root cause analysis across four categories (People, Process, Environment, Technology) revealed systemic issues: psychological safety deficits, misaligned service models, and environmental design flaws.
                            <br /><br />
                            <strong>POV Statement:</strong> Margaret needs a psychologically safe environment for structured, peer supported learning because the current setting triggers anxiety that blocks her existing capabilities.
                            <br /><br />
                            <strong>HMW Question:</strong> How might we transform library users with teaching experience into peer mentors for digital literacy support?
                        </p>
                    </div>
                </motion.div>

                <motion.div className="timeline-item" variants={itemVariants}>
                    <div className="timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    </div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Part 4: Generate Ideas</h3>
                        <p className="timeline-text">
                            <strong>Divergent Thinking:</strong> Generated 28 diverse ideas using SCAMPER, cross domain inspiration, and wild ideas encouragement.
                            <br /><br />
                            <strong>Convergent Thinking:</strong> Used weighted decision matrix with six criteria (Leverage User Strengths, Psychological Safety, Scalability, Community Building, Feasibility, Innovation).
                            <br /><br />
                            <strong>Selected Solution:</strong> Senior Tech Ambassadors Program scored 113/120 (94.2%), addressing multiple root causes while transforming the service delivery model from dependency creating to community empowering.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default ProcessSummary;
