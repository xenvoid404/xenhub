'use client';

import { Oauth } from '@/components/oauth';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InputError } from '@/components/ui/input-error'; // Komponen ini tidak dipakai, tapi saya biarkan di import
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export function Form() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState({
        new: false,
        confirm: false
    });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();
        setIsLoading(true);
        setError(null);

        if (password.trim() !== confirmPassword.trim()) {
            setError('Password tidak sama');
            setIsLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/`
                }
            });
            if (error) throw error;
            router.push('/verify-email');
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Oauth />
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        aria-invalid={!!error}
                        disabled={isLoading}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            name="password"
                            type={showPassword.new ? 'text' : 'password'}
                            required
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            aria-invalid={!!error}
                            disabled={isLoading}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2"
                            onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                        >
                            {showPassword.new ? <Icon.eyeOff className="size-5" /> : <Icon.eye className="size-5" />}
                        </Button>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm_password">Konfirmasi Password</Label>
                    <div className="relative">
                        <Input
                            id="confirm_password"
                            name="confirm_password"
                            type={showPassword.confirm ? 'text' : 'password'}
                            required
                            placeholder="Konfirmasi Password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            aria-invalid={!!error}
                            disabled={isLoading}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2"
                            onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                        >
                            {showPassword.confirm ? <Icon.eyeOff className="size-5" /> : <Icon.eye className="size-5" />}
                        </Button>
                    </div>
                </div>
                <InputError message={error ?? undefined} />
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Icon.loaderCircle className="absolute animate-spin" />}
                    <span className={isLoading ? 'invisible' : 'visible'}>Register</span>
                </Button>
            </form>
        </>
    );
}
