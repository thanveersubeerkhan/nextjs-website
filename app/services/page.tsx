import PageHero from '@/components/sections/PageHero';
import ServicesIntroSection from '@/components/sections/ServicesIntroSection';
import ServicesTabsSection from '@/components/sections/ServicesTabsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ServiceWhyChooseUs from '@/components/sections/ServiceWhyChooseUs';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-neutral-950 transition-colors">
            <PageHero
                title="Services"
                subtitle="We provide a wide range of Services"
            />
            <ServicesIntroSection />
            <ServicesTabsSection />
            <IndustriesSection />
            <ServiceWhyChooseUs />
            {/* <StatsSection />
            <CTASection variant="gradient" /> */}
        </div>
    );
}
