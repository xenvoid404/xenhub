import { Input } from '@/components/ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface UsernameInputProps {
    register: UseFormRegister<any>;
    error?: FieldError;
}

export function UsernameInput({ register, error }: UsernameInputProps) {
    return (
        <div>
            <Input type="text" placeholder="Enter your username" {...register('username')} />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}