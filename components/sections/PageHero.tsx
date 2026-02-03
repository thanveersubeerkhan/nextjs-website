type PageHeroProps = {
    title: string;
    subtitle?: string;
    className?: string;
};

export default function PageHero({ title, subtitle, className = '' }: PageHeroProps) {
    return (
        <section className={`bg-background text-foreground pt-32 pb-20 md:pt-40 md:pb-32 transition-colors duration-500 border-b border-border relative overflow-hidden ${className}`}>
            {/* Dynamic Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-transparent -z-10"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(21,128,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,128,61,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-50 transition-opacity"></div>

            <div className="container text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-black mb-6 animate-in fade-in slide-in-from-bottom duration-500 text-foreground tracking-tight">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom duration-700 leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Accent Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </section>
    );
}
