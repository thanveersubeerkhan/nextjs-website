import PageHero from '@/components/sections/PageHero';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CTASection from '@/components/sections/CTASection';

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-neutral-950 transition-colors">
            <PageHero
                title="Our Services"
                subtitle="Scalable. Performance-driven. Enterprise-grade."
            />
            <ServicesSection />
            <WhyChooseUsSection />
            <CTASection variant="gradient" />
        </div>
    );
}
