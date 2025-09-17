import { Input } from '@/components/ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface PasswordInputProps {
    register: UseFormRegister<any>;
    error?: FieldError;
}

export function PasswordInput({ register, error }: PasswordInputProps) {
    return (
        <div>
            <Input type="password" placeholder="Enter your password" {...register('password')} />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}