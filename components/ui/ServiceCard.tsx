import Link from 'next/link';
import Card from './Card';
import { Service } from '@/data/services';

export default function ServiceCard({ title, slug, description, icon }: Service) {
    return (
        <Link href={`/services/${slug}`} className="block h-full">
            <Card className="h-full group hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {icon ? (
                            <span className="text-3xl">{icon}</span>
                        ) : (
                            <span className="font-black text-2xl">{title.charAt(0)}</span>
                        )}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{description}</p>
                <div className="inline-flex items-center text-primary font-bold text-sm tracking-tight">
                    Learn more
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </Card>
        </Link>
    );
}
