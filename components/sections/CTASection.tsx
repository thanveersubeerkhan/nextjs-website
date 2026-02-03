import Button from '@/components/ui/Button';

type CTASectionProps = {
    title?: string;
    description?: string;
    variant?: 'default' | 'dark' | 'gradient';
};

export default function CTASection({
    title = "Ready to build something amazing?",
    description = "Join the many businesses that have already transformed their digital presence with Ryan Quantum.",
    variant = 'default'
}: CTASectionProps) {

    const backgrounds = {
        default: 'bg-primary text-primary-foreground',
        dark: 'bg-neutral-900 dark:bg-black text-white border-t border-border',
        gradient: 'bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground'
    };

    return (
        <section className={`py-20 md:py-24 transition-colors relative overflow-hidden ${backgrounds[variant]}`}>
            {variant === 'gradient' && (
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
            )}

            <div className="container text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-8 max-w-3xl mx-auto tracking-tight">{title}</h2>
                <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                    <Button
                        variant={variant === 'dark' ? 'primary' : 'secondary'}
                        size="lg"
                        className="rounded-full px-10 shadow-xl"
                    >
                        Start a Project
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className={`rounded-full px-10 transition-all ${variant === 'dark'
                                ? 'border-white/30 text-white hover:bg-white/10'
                                : 'border-white/30 text-white hover:bg-white/10'
                            }`}
                    >
                        Talk to Sales
                    </Button>
                </div>
            </div>
        </section>
    );
}
