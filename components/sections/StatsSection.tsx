import StatCard from '@/components/ui/StatCard';
// Images from ryanquantum.com
const stats = [
    { label: "Happy Clients", value: 150, suffix: "+", image: "https://ryanquantum.com/wp-content/uploads/2025/11/counter2.png" },
    { label: "Projects Completed", value: 200, suffix: "+", image: "https://ryanquantum.com/wp-content/uploads/2025/11/counter1.png" },
    { label: "On-Time Delivery", value: 100, suffix: "%", image: "https://ryanquantum.com/wp-content/uploads/2025/11/counter4.png" }, // Using counter4 or finding a better match if available, keeping strictly to source implies maybe just updating text/value
    { label: "Professionals", value: 50, suffix: "+", image: "https://ryanquantum.com/wp-content/uploads/2025/11/counter4.png" },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container">
                <div className="text-center mb-16">
                    <p className="text-primary font-bold uppercase tracking-widest mb-4">Our Numbers Reflect</p>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">Proven Success and <br />Unwavering Expertise.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-24 h-24 mb-6">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                                <img
                                    src={stat.image}
                                    alt={stat.label}
                                    className="relative z-10 w-full h-full object-contain animate-in fade-in zoom-in duration-1000"
                                />
                            </div>
                            <StatCard {...stat} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
