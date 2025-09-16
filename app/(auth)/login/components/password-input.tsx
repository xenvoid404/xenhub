'use client';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icons';

export function PasswordInput() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
                <Input id="password" type={isVisible ? 'text' : 'password'} placeholder={isVisible ? 'Password' : '********'} />
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2"
                    onClick={toggleVisibility}
                >
                    {isVisible ? <Icon.eyeOff className="size-5" /> : <Icon.eye className="size-5" />}
                </Button>
            </div>
        </div>
    );
}
