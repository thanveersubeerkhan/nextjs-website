import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
    return (
        <section className="section-padding bg-muted/50">
            <div className="container">
                <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Expertise</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Premium Digital Services</h3>
                    <p className="mt-6 text-muted-foreground leading-relaxed">
                        We provide specialized solutions across the entire digital spectrum, from initial design thinking to enterprise-grade software development.
                    </p>
                </div>

                {/* Using the smart-grid utility */}
                <div className="smart-grid">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
