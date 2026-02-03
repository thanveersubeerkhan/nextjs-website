import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import TechStackSection from '@/components/sections/TechStackSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <StatsSection />

      {/* Introduction Section - Fully Theme Aware */}
      <section className="section-padding bg-background border-y border-border transition-colors duration-500">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6 font-black leading-tight text-foreground text-3xl md:text-5xl tracking-tight">
                Empowering Innovation <br />
                <span className="text-primary">In Erode & Coimbatore</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Slash Info Tech, we deliver high-quality and affordable digital solutions that drive measurable results. Based in Erode and Coimbatore, we specialize in creating professional, mobile-responsive, and SEO-optimized websites that enhance your brand presence and business performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans across custom software development, eCommerce solutions, dynamic web applications, and conversion-focused designs — all built with innovation, precision, and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 hover:border-primary/20 transition-all group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">🌐</span>
                <h4 className="text-xl font-bold mb-2 text-foreground">Web Design</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">We create visually stunning, user-friendly, and mobile-responsive website designs that convert visitors into customers.</p>
              </div>
              <div className="bg-muted p-8 rounded-3xl border border-border hover:border-primary/20 transition-all group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">💻</span>
                <h4 className="text-xl font-bold mb-2 text-foreground">Web Development</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">We build fast, secure, and scalable websites using the latest technologies and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />

      <CTASection
        variant="gradient"
        title="Bring Your Ideas to Life With Custom Software"
        description="Ready to Digitize Your Business? Reach Out to Our Software Specialists at Slash Info Tech Today."
      />
    </>
  );
}
