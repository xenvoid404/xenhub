import { Input } from '@/components/ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface ConfirmPasswordInputProps {
    register: UseFormRegister<any>;
    error?: FieldError;
}

export function ConfirmPasswordInput({ register, error }: ConfirmPasswordInputProps) {
    return (
        <div>
            <Input type="password" placeholder="Confirm your password" {...register('confirmPassword')} />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}