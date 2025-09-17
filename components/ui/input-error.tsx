import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputErrorProps extends HTMLAttributes<HTMLParagraphElement> {
    message?: string;
    className?: string;
}

export function InputError({ message, className, ...props }: InputErrorProps) {
    return message ? (
        <p className={cn('text-xs md:text-sm lg:text-md text-red-500', className)} {...props}>
            {message}
        </p>
    ) : null;
}
