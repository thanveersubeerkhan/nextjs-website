import Card from './Card';
import { WorkflowStep } from '@/data/workflow';

export default function StepCard({ number, title, description }: WorkflowStep) {
    return (
        <Card className="relative overflow-hidden group transition-all h-full">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 text-muted/20 font-black text-8xl group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                {number}
            </div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    {number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </Card>
    );
}
