import { Input } from '@/components/ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface NameInputProps {
    register: UseFormRegister<any>;
    error?: FieldError;
}

export function NameInput({ register, error }: NameInputProps) {
    return (
        <div>
            <Input type="text" placeholder="Enter your name" {...register('name')} />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}