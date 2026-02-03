const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Java", icon: "☕" },
    { name: "Figma", icon: "🎨" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "🌊" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
];

export default function TechStackSection() {
    return (
        <section className="py-16 bg-background border-y border-border transition-colors duration-500">
            <div className="container">
                <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Innovative Technologies We Use</h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-default"
                        >
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="font-bold text-foreground">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
