'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    {
        id: 'who',
        label: 'Who We Are',
        title: 'Who We Are',
        content: 'Ryan Quantum Technologies in Erode is a premium web design and development company committed to turning ideas into impactful digital solutions.',
        bullets: [
            'Driven by creativity and technology.',
            'Expert team of developers, designers, and strategists.',
            'Focused on innovation and local excellence.'
        ],
        highlight: '💡 Our Philosophy: “Every pixel counts, every client matters.”'
    },
    {
        id: 'what',
        label: 'What We Do',
        title: 'What We Do',
        content: 'We craft tailored solutions that help your brand stand out. From eye-catching websites to scalable online stores, we deliver performance and style.',
        bullets: [
            'Modern website design and development.',
            'WordPress CMS customization and management.',
            'eCommerce platforms with secure payment gateways.',
            'SEO-friendly and mobile-responsive designs.'
        ],
        highlight: '🚀 Result-Oriented Approach: Every project is built to attract, engage, and convert your target audience.'
    },
    {
        id: 'how',
        label: 'How We Do',
        title: 'How We Do',
        content: 'Our workflow is built on collaboration, transparency, and innovation — ensuring that you stay informed and inspired throughout the journey.',
        bullets: [
            'Understanding your goals and audience deeply.',
            'Designing intuitive layouts and user interfaces.',
            'Developing with precision, testing with care.',
            'Delivering projects on time with ongoing support.'
        ],
        highlight: '⚙️ Technology Meets Creativity: We merge design thinking with robust coding to deliver excellence.'
    },
    {
        id: 'where',
        label: 'Where We Serve',
        title: 'Where We Serve',
        content: 'Based in the thriving business hub of Erode, we proudly serve clients across Tamil Nadu and beyond — helping local brands achieve global recognition.',
        bullets: [
            'Serving startups, enterprises, and professionals.',
            'Local presence with international standards.',
            'Remote collaboration for clients across India and overseas.'
        ],
        highlight: '🌍 Our Reach: From Erode to the world — delivering digital excellence wherever you are.'
    }
];

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState('who');

    return (
        <section className="section-padding bg-background transition-colors duration-500">
            <div className="container max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-12 leading-tight">
                    Transforming Your Digital Vision Into Reality — <br />
                    <span className="text-primary">With Innovation, Expertise & Local Excellence</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full font-bold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="bg-muted p-8 md:p-12 rounded-[2rem] text-left shadow-sm border border-border">
                    <AnimatePresence mode="wait">
                        {tabs.map((tab) => (
                            activeTab === tab.id && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-black mb-4 text-foreground">{tab.title}</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        <strong>Ryan Quantum Technologies</strong> {tab.content.split('Ryan Quantum Technologies')[1] || tab.content}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {tab.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-foreground">
                                                <span className="text-primary mt-1">✔</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                                        <p className="text-foreground font-medium italic">{tab.highlight}</p>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
