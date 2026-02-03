import StepCard from '@/components/ui/StepCard';
import { workflowSteps } from '@/data/workflow';

export default function ProcessSection() {
    return (
        <section className="section-padding bg-background transition-colors">
            <div className="container">
                <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Process</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">How We Work</h3>
                    <p className="mt-6 text-muted-foreground leading-relaxed">
                        A proven methodology that takes your project from a raw idea to a market-ready digital product with precision and speed.
                    </p>
                </div>

                {/* Adjusted to be a 3-column grid on desktop (forming 2 rows for 6 steps) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workflowSteps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
}
