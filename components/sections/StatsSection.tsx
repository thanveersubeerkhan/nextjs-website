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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse group-hover:bg-primary/30 transition-colors"></div>
                                <img
                                    src={stat.image}
                                    alt={stat.label}
                                    className="relative z-10 w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
