import Card from '@/components/ui/Card';

const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "E-Commerce", icon: "🛒" },
    { name: "Corporate", icon: "🏢" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Finance", icon: "💰" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Travel & Tourism", icon: "✈️" },
    { name: "Automotive", icon: "🚗" }
];

export default function IndustriesSection() {
    return (
        <section className="section-padding bg-muted/30">
            <div className="container">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Industries We Serve</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-foreground mb-6 Tracking-tight">Empowering Diverse Sectors</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Delivering tailored digital solutions that drive innovation and growth across multiple industries.
                    </p>
                </div>

                {/* Using the new smart-grid-compact utility */}
                <div className="smart-grid-compact">
                    {industries.map((ind) => (
                        <div
                            key={ind.name}
                            className="group p-8 bg-card rounded-2xl border border-border text-center hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center min-h-[160px]"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">{ind.icon}</div>
                            <h4 className="text-base font-bold text-card-foreground tracking-tight">{ind.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
