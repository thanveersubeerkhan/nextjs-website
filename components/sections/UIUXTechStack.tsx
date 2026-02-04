"use client";

import { motion } from 'framer-motion';

const tools = [
    { name: "Figma", description: "UI Design & Prototyping", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/figma-2.png" },
    { name: "Adobe XD", description: "UI & UX Design", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/xd.png" },
    { name: "Sketch", description: "Wireframes & UI Layouts", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/sketch.png" },
    { name: "Photoshop", description: "Graphic & UI Assets", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/photoshop.png" },
    { name: "Illustrator", description: "Vector & Icon Design", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/illustrator.png" },
    { name: "InVision", description: "Prototyping & Animation", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/invision.png" },
    { name: "Axure RP", description: "Advanced Wireframes", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/azure.png" },
    { name: "Balsamiq", description: "Low-Fidelity Wireframes", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/bal.png" },
    { name: "Marvel App", description: "Prototyping & Testing", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/9caaaab6-b3cc-4590-89e9-aca7dfaac792-converted.png" },
    { name: "Zeplin", description: "Developer Handoff", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/Zeplin.jpg" },
    { name: "Canva", description: "Graphic & Social Media Design", icon: "https://ryanquantum.com/wp-content/uploads/2025/11/canva.jpg" }
];

export default function UIUXTechStack() {
    return (
        <section className="py-24 bg-white border-t border-gray-50">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-black text-[#0A0B10] uppercase tracking-tighter"
                    >
                        UI/UX & Graphic Design Tools We Use
                    </motion.h2>
                    <div className="w-12 h-1 bg-[#4C5EFD] mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-6 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-default"
                        >
                            <div className="w-20 h-20 flex items-center justify-center mb-6 bg-gray-50 rounded-2xl group-hover:bg-primary/5 transition-colors duration-500 relative">
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-500 z-10"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <span className="hidden text-xl font-black text-gray-300 uppercase tracking-tighter group-hover:text-primary transition-colors">
                                    {tool.name.substring(0, 2)}
                                </span>
                            </div>
                            <h4 className="text-xs font-black text-[#0A0B10] uppercase tracking-widest mb-2">{tool.name}</h4>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                                {tool.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
