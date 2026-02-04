'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const brandingServices = [
    {
        title: "Logo Design",
        description: "We craft unique, memorable logos aligned with your brand identity for strong visual recognition."
    },
    {
        title: "Brand Identity",
        description: "Complete brand system including colors, fonts, style rules and visual guidelines for consistency."
    },
    {
        title: "Brand Guidelines",
        description: "A complete brand book that defines how to use your logo, typography, and color palette correctly."
    },
    {
        title: "Stationery Kit",
        description: "Business cards, letterheads, envelopes and ID cards designed with professional brand precision."
    },
    {
        title: "Marketing Materials",
        description: "Creative brochures, flyers, company profiles and promotional designs for brand outreach."
    },
    {
        title: "Social Media Branding",
        description: "Branded templates, ad banners, cover images and consistent digital assets for all platforms."
    },
    {
        title: "Packaging Design",
        description: "Eye-catching packaging concepts including boxes, labels and wrapper designs for any product."
    },
    {
        title: "Website UI Graphics",
        description: "Clean banners, icons and UI illustrations that enhance usability and elevate brand presence."
    },
    {
        title: "Ad Creatives",
        description: "High-impact ad banners, posters and billboards designed to attract attention instantly."
    },
    {
        title: "Presentation Design",
        description: "Modern pitch decks and corporate presentations with clean layouts and strong visuals."
    },
    {
        title: "Event Branding",
        description: "Stage backdrops, standees, invitations and event visuals that maintain perfect brand consistency."
    },
    {
        title: "Rebranding",
        description: "A complete transformation of your brand visuals with modern, upgraded identity elements."
    }
];

export default function UIUXBrandingTable() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default active item (Brand Identity)

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                    alt="Team Brainstorming"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
            </div>

            <div className="container relative z-10 px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white capitalize tracking-tight leading-tight">
                        Shaping Your <span className="text-[#E74C3C]">Brand's</span> Story Through Powerful, Stunning Design
                    </h2>
                </div>

                <div className="max-w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
                        {brandingServices.map((service, index) => (
                            <div
                                key={index}
                                className="relative group border-r border-b border-white/10 h-48 md:h-32 p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300"
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                {/* Active State Card */}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="active-card"
                                        className="absolute inset-0 bg-white z-20 shadow-2xl flex flex-col items-center justify-center p-6"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h3 className="text-lg font-bold text-black mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs font-medium leading-relaxed">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                )}

                                {/* Inactive State Text */}
                                <h3 className={`text-lg font-bold transition-all duration-300 ${hoveredIndex === index ? 'opacity-0' : 'text-white/90 group-hover:text-white'}`}>
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
