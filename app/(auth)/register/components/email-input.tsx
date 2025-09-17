import { Input } from '@/components/ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface EmailInputProps {
    register: UseFormRegister<any>;
    error?: FieldError;
}

export function EmailInput({ register, error }: EmailInputProps) {
    return (
        <div>
            <Input type="email" placeholder="Enter your email" {...register('email')} />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}