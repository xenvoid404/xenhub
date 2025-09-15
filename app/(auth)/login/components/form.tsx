import { EmailInput } from '@/app/(auth)/login/components/email-input';
import { PasswordInput } from '@/app/(auth)/login/components/password-input';
import { SubmitButton } from '@/app/(auth)/login/components/submit-button';
import { Separator } from '@/components/ui/separator';
import { Icon } from '@/components/ui/icons';

export function Form() {
    return (
        <form className="space-y-4">
            <EmailInput />
            <PasswordInput />
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
            <SubmitButton />
        </form>
    );
}
