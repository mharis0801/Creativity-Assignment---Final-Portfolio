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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Reflection() {
    return (
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Personal Reflection</h2>
                <p className="section-subtitle">
                    Insights and learnings from the creative problem-solving journey
                </p>
            </div>

            <motion.div
                className="reflection-box"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="reflection-quote" variants={itemVariants}>
                    "The most powerful solutions don't fix problems, they transform how we think about them." - Muhammad Haris
                </motion.div>

                <motion.p className="reflection-text" variants={itemVariants}>
                    This creative problem-solving journey fundamentally changed how I approach complex challenges. Initially, I assumed the library's digital inclusion problem required more computers, better software, or additional staff training. The systematic CPS process revealed something far more profound: the solution was already present in the community, waiting to be unlocked.
                </motion.p>

                <motion.p className="reflection-text" variants={itemVariants}>
                    <strong>What worked exceptionally well</strong> was the empathy interview with Margaret. Her vulnerability in sharing her "heart racing" anxiety and desire to help others provided the critical insight that no amount of observation alone could have revealed. The fishbone diagram analysis then connected individual experiences to systemic patterns, making it clear that addressing symptoms (like adding more tech support staff) would never solve the root causes.
                </motion.p>

                <motion.p className="reflection-text" variants={itemVariants}>
                    The brainstorming phase taught me the value of divergent thinking techniques. Using SCAMPER forced me beyond obvious solutions. Ideas like "Reverse Mentoring" and "Tech Skills Exchange Currency" seemed wild initially but pushed my thinking toward the peer mentorship model that ultimately scored highest. The decision matrix provided objectivity, my initial favorite idea (Digital Practice Lab) scored much lower because it didn't leverage community strengths or create sustainable support.
                </motion.p>

                <motion.p className="reflection-text" variants={itemVariants}>
                    <strong>What I would do differently:</strong> I wish I had conducted empathy interviews with multiple user types earlier, not just older adults like Margaret, but also younger library users, staff members, and even those who avoid the library due to tech barriers. This broader perspective would have enriched my problem definition and potentially revealed additional solution pathways.
                </motion.p>

                <motion.p className="reflection-text" variants={itemVariants}>
                    The CPS process also revealed something important about myself: I have a tendency toward "expert solutions" (implementing technology, designing systems) rather than "community solutions" (empowering people, facilitating connections). The Senior Tech Ambassadors Program works precisely because it inverts this assumption, treating community members as assets rather than problems to solve.
                </motion.p>

                <motion.p className="reflection-text" variants={itemVariants}>
                    Most significantly, this process demonstrated that creative problem-solving isn't about individual brilliance or sudden inspiration. It's about systematic observation, deep empathy, rigorous analysis, and disciplined ideation. The "creative" part isn't magical, it emerges from asking better questions, challenging assumptions, and trusting the process even when answers aren't immediately apparent.
                </motion.p>
            </motion.div>
        </section>
    );
}

export default Reflection;
