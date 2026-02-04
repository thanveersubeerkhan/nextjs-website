"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: "GST Billing Software Development",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/G.S.T.png",
        desc: "Slash Info Tech creates advanced GST Billing Software crafted for retail, wholesale, and restaurant sectors. It supports both mobile and desktop platforms, ensuring accuracy in invoicing, taxation, and reporting — empowering smarter business growth."
    },
    {
        title: "Job Portal Software",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/JOB-PORTAL.png",
        desc: "Our Job Portal Software helps recruitment agencies and businesses streamline hiring. It includes candidate tracking, job posting, and employer dashboards — making recruitment faster and more organized."
    },
    {
        title: "Field Service Management",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/FIELD-OFFICE.png",
        desc: "Simplify field operations with our Field Service Management Software. Assign, track, and monitor service tasks in real-time — ensuring efficiency for logistics, maintenance, and on-site teams."
    },
    {
        title: "Custom Software Development",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/CUSTOM-SOFTWARE.png",
        desc: "Slash Info Tech specializes in designing customized software applications that perfectly align with your business goals. We build robust, scalable, and secure systems that drive productivity."
    },
    {
        title: "CRM Software Development",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/CRM.png",
        desc: "Our CRM solutions help businesses build stronger customer relationships. Automate communication, track leads, and manage clients efficiently with powerful dashboards and reporting tools."
    },
    {
        title: "Lead Management Software",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/LEAD.png",
        desc: "Stay ahead in sales with our Lead Management Software. Capture, track, and convert leads faster through automated workflows and insightful analytics."
    },
    {
        title: "Shopping Cart Software",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/SHOPPING-CART.png",
        desc: "Enhance your online business with our feature-rich Shopping Cart Software. Manage products, process payments securely, and offer a seamless shopping experience to your customers."
    },
    {
        title: "Food Delivery Software",
        img: "https://ryanquantum.com/wp-content/uploads/2025/11/FOOD-DELIVERY.png",
        desc: "Our Food Delivery Software simplifies online ordering and delivery management for restaurants and startups. Manage customers, track deliveries, and streamline your operations easily."
    }
];

export default function SoftwareDevServicesTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-20 bg-[#f5fbff]">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1b4b8a] mb-6 uppercase tracking-tight">
                        Our Wide Range of Software Application Development Services
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        The team at <strong className="text-foreground">Slash Info Tech, Coimbatore</strong> specializes in creating scalable, user-friendly, and high-performance software solutions.
                        We deliver next-generation digital systems that empower startups and enterprises to thrive in a technology-driven world.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-3">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`text-left p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${activeTab === index
                                    ? 'bg-[#FFD700] border-[#FFD700] text-black shadow-md scale-[1.02]'
                                    : 'bg-white border-[#d8ecff] text-[#1b4b8a] hover:bg-[#eaf4ff]'
                                    }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-border h-full flex flex-col items-center justify-center text-center"
                            >
                                <div className="mb-8 w-full max-w-md mx-auto aspect-video relative">
                                    <img
                                        src={services[activeTab].img}
                                        alt={services[activeTab].title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1b4b8a] mb-4">
                                    {services[activeTab].title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                    {services[activeTab].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
