'use client';

import { motion } from 'framer-motion';

export default function UIUXSubFooter() {
    const linkGroups = [
        {
            title: "Brand Strategy",
            links: ["Logo Design", "Identity Design", "Brand Visibility"]
        },
        {
            title: "Digital Presence",
            links: ["Web Hosting", "UI/UX Design", "SEO Solutions"]
        },
        {
            title: "Marketing Solutions",
            links: ["Social Media", "Website Solutions", "Mobile App Marketing", "Email Marketing"]
        }
    ];

    return (
        <section className="py-12 bg-[#0A0B10] text-white">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-lg font-black uppercase tracking-widest text-primary italic">
                        Shaping Your Brand's Story Through Powerful, Stunning Design
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-10">
                    {linkGroups.map((group, i) => (
                        <div key={i} className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="text-sm font-bold uppercase tracking-tighter hover:text-primary transition-colors duration-300">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
