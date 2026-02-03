import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};

export default function Textarea({ label, error, className = '', ...props }: TextareaProps) {
    return (
        <div className="space-y-2 w-full">
            {label && (
                <label className="text-sm font-medium leading-none text-foreground">
                    {label}
                </label>
            )}
            <textarea
                className={`flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${error ? 'border-destructive' : ''
                    } ${className}`}
                {...props}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    );
}
