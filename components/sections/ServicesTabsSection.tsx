'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const servicesData = [
    {
        id: 'design',
        label: 'Web Design',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/responsive-3.gif',
        title: 'Web Design Services',
        description: 'At Slash Info Tech, our web design team blends creativity and strategy to create visually stunning, user-friendly, and conversion-driven websites. We focus on crafting responsive designs that deliver seamless experiences across all screen sizes — ensuring your brand looks professional everywhere.',
        para2: 'We pay close attention to color harmony, layout balance, and typography to build websites that not only impress but also perform. From corporate sites to creative portfolios, our design work helps brands establish a strong online presence.',
        bullets: [
            'Business & Corporate Websites',
            'Portfolio & Personal Websites',
            'Blog & Magazine Websites',
            'Landing Pages & Microsites'
        ]
    },
    {
        id: 'development',
        label: 'Web Development',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/responsive-4.gif',
        title: 'Web Development Services',
        description: 'We build secure, scalable, and high-performing websites with powerful backend systems and optimized frontend interfaces. Every project is developed with a focus on usability, functionality, and flexibility for future growth.',
        para2: 'Our development stack includes WordPress, WooCommerce, Shopify, and custom PHP/JavaScript frameworks — designed to ensure fast performance, seamless integration, and superior scalability.',
        bullets: [
            'WordPress & CMS Development',
            'eCommerce Solutions (WooCommerce, Shopify)',
            'Custom Web Applications',
            'API Integrations & Backend Systems'
        ]
    },
    {
        id: 'software',
        label: 'Software Development',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/software.gif',
        title: 'Software Development Services',
        description: 'Our software development team builds intelligent, secure, and efficient business applications tailored to your needs. From automating daily operations to managing large-scale enterprise processes, we create software that simplifies your workflow.',
        para2: 'We focus on usability, scalability, and performance — empowering your team with tools that enhance productivity and decision-making.',
        bullets: [
            'Custom Business Applications',
            'ERP & CRM Solutions',
            'Inventory & Billing Software',
            'Cloud-Based Applications'
        ]
    },
    {
        id: 'mobile',
        label: 'Mobile App Development',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/cellphone.gif',
        title: 'Mobile App Development',
        description: 'We design and develop mobile apps that deliver powerful performance and a flawless user experience. Our app development process focuses on user behavior, intuitive navigation, and visual appeal to create apps people love using.',
        para2: 'We build apps for Android, iOS, and cross-platform environments with responsive interfaces, smooth animations, and strong security layers.',
        bullets: [
            'Native & Hybrid App Development',
            'iOS & Android Solutions',
            'Cross-Platform Frameworks',
            'App Maintenance & Support'
        ]
    },
    {
        id: 'marketing',
        label: 'Digital Marketing',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/laptop-2.gif',
        title: 'Digital Marketing Services',
        description: 'Our marketing experts help your brand grow online through strategic campaigns, data-driven SEO, and high-converting ad strategies. We build your digital reputation and help you attract the right audience to increase engagement and sales.',
        para2: 'From optimizing your website to managing paid ads and social media, we ensure your brand gets the visibility it deserves.',
        bullets: [
            'Search Engine Optimization (SEO)',
            'Google Ads & PPC Campaigns',
            'Social Media Marketing',
            'Content & Branding Strategy'
        ]
    },
    {
        id: 'branding',
        label: 'Graphic Design & Branding',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/digital-art.gif',
        title: 'Graphic Design & Branding',
        description: 'Your visual identity defines how customers remember you. We design creative logos, digital graphics, and brand systems that communicate your values and story effectively.',
        para2: 'Our designers combine aesthetics and strategy to create brand visuals that work perfectly across all marketing materials.',
        bullets: [
            'Logos & Brand Identities',
            'Brochures, Flyers & Banners',
            'Social Media Creatives',
            'UI/UX Prototypes'
        ]
    },
    {
        id: 'maintenance',
        label: 'Web Maintenance & Support',
        icon: 'https://ryanquantum.com/wp-content/uploads/2025/11/customer-service.png',
        title: 'Web Maintenance & Support',
        description: 'We ensure your website remains secure, fast, and updated with our comprehensive maintenance services. Our support team handles everything from updates to backups, ensuring zero downtime and smooth operations.',
        para2: 'We monitor, maintain, and protect your online presence while you focus on growing your business.',
        bullets: [
            'Regular Backups',
            'Security Updates',
            'Performance Optimization',
            'Technical Support'
        ]
    }
];

export default function ServicesTabsSection() {
    const [activeTab, setActiveTab] = useState('design');

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row bg-background/50 backdrop-blur-xl border border-border/50 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.15)]">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border bg-muted/30">
                        <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory">
                            {servicesData.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-4 p-5 md:p-6 text-left border-b-2 lg:border-b-0 lg:border-l-4 transition-all duration-300 min-w-max lg:min-w-0 snap-start ${activeTab === tab.id
                                        ? 'bg-background border-primary lg:border-l-primary scale-105 shadow-lg z-10'
                                        : 'border-transparent hover:bg-muted/50 opacity-50 hover:opacity-100 hover:scale-[1.02]'
                                        }`}
                                >
                                    <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                                        <Image
                                            src={tab.icon}
                                            alt={tab.label}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <span className={`font-black text-[10px] md:text-sm uppercase tracking-wider ${activeTab === tab.id ? 'text-primary' : 'text-foreground'}`}>
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3 p-8 lg:p-16 relative bg-background">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full flex flex-col"
                            >
                                {servicesData.find(s => s.id === activeTab) && (
                                    <>
                                        <h3 className="text-2xl md:text-3xl font-black text-primary mb-6 uppercase tracking-tight">
                                            {servicesData.find(s => s.id === activeTab)?.title}
                                        </h3>
                                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                            <p className="text-foreground/90 font-medium">
                                                {servicesData.find(s => s.id === activeTab)?.description}
                                            </p>
                                            <p>
                                                {servicesData.find(s => s.id === activeTab)?.para2}
                                            </p>
                                        </div>

                                        <div className="mt-10 pt-10 border-t border-border">
                                            <h4 className="text-sm font-black text-foreground uppercase tracking-widest mb-6">Core Offerings</h4>
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {servicesData.find(s => s.id === activeTab)?.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-foreground font-bold">
                                                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                                                            ✔
                                                        </span>
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
