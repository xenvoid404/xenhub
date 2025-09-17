"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Oauth } from '@/components/oauth';
import { Separator } from '@/components/ui/separator';
import { NameInput } from './name-input';
import { UsernameInput } from './username-input';
import { EmailInput } from './email-input';
import { PasswordInput } from './password-input';
import { ConfirmPasswordInput } from './confirm-password-input';
import { SubmitButton } from './submit-button';
import { register } from '../actions';
import { useState } from 'react';

const registerSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function Form() {
    const [error, setError] = useState<string | null>(null);
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data: RegisterFormValues) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('confirmPassword', data.confirmPassword);

        const result = await register(formData);
        if (result?.error) {
            setError(result.error);
        }
    };

    return (
        <>
            <Oauth />
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <NameInput register={formRegister} error={errors.name} />
                <UsernameInput register={formRegister} error={errors.username} />
                <EmailInput register={formRegister} error={errors.email} />
                <PasswordInput register={formRegister} error={errors.password} />
                <ConfirmPasswordInput register={formRegister} error={errors.confirmPassword} />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <SubmitButton />
            </form>
        </>
    );
}
