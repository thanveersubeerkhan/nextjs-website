import Image from 'next/image';

const industries = [
    {
        name: "Healthcare",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/heartbeat.gif",
        description: "Digital solutions for hospitals, clinics, and health startups — ensuring seamless patient engagement, appointment systems, and secure data management."
    },
    {
        name: "Education",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/graduate.gif",
        description: "Custom eLearning platforms, virtual classrooms, and ERP systems that enhance online education and simplify school management."
    },
    {
        name: "E-Commerce",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/online-supermarket.gif",
        description: "End-to-end online store solutions with intuitive designs, payment integrations, and advanced analytics to maximize conversions."
    },
    {
        name: "Corporate & Business",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/business-plan.gif",
        description: "Professional web and software solutions that streamline workflows, automate operations, and elevate corporate digital presence."
    },
    {
        name: "Real Estate",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/mortage.gif",
        description: "Property listing websites and mobile apps that make showcasing, booking, and managing real estate listings effortless."
    },
    {
        name: "Hospitality",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/receptionist-desk.gif",
        description: "Custom web and booking solutions for hotels and restaurants — designed to boost bookings, reviews, and customer retention."
    },
    {
        name: "Finance & Banking",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/piggy-bank.gif",
        description: "Secure, compliant, and high-performance software that supports fintech, banking, and accounting services with real-time insights."
    },
    {
        name: "Manufacturing",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/factory.gif",
        description: "Industrial-grade software and IoT integrations that simplify inventory management, production tracking, and logistics control."
    },
    {
        name: "Travel & Tourism",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/sustainability.gif",
        description: "Innovative travel portals and booking systems that help agencies deliver better experiences to travelers worldwide."
    },
    {
        name: "Automotive",
        icon: "https://ryanquantum.com/wp-content/uploads/2025/11/hand-holding-wrench.gif",
        description: "Digital tools for dealerships, service centers, and parts suppliers — optimizing vehicle sales, management, and customer experience."
    }
];

export default function IndustriesSection() {
    return (
        <section className="section-padding bg-[#414141] dark:bg-[#1a1a1a] relative overflow-hidden">
            <div className="absolute inset-0 bg-[#000]/10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="container relative z-10">
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-[#8db1de] dark:text-blue-400 mb-6 uppercase tracking-tighter leading-tight drop-shadow-sm">
                        Industries We Serve
                    </h2>
                    <p className="text-lg md:text-xl text-[#7a99c1] dark:text-blue-300/80 font-medium max-w-3xl mx-auto leading-relaxed">
                        At <strong className="text-white">Slash Info Tech</strong>, we empower businesses across diverse industries through tailored digital solutions that drive innovation, efficiency, and measurable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-[2.5rem] shadow-xl border-4 transition-all duration-500 group flex flex-col items-center text-center h-full hover:-translate-y-2 ${industry.name === 'Automotive'
                                ? 'border-primary ring-2 ring-primary/20 scale-105 z-10'
                                : 'border-transparent hover:border-primary/30'
                                }`}
                        >
                            <div className="mb-6 relative group-hover:scale-110 transition-transform duration-500 h-24 w-24 flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                                <Image
                                    src={industry.icon}
                                    alt={industry.name}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <h3 className={`text-lg font-black mb-4 uppercase tracking-tighter transition-colors duration-300 ${industry.name === 'Automotive' ? 'text-primary' : 'text-[#333] group-hover:text-primary'
                                }`}>
                                {industry.name}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
