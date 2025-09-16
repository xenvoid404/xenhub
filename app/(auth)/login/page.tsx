import { Form } from '@/app/(auth)/login/components/form';
import { TextLink } from '@/components/text-link';

export default function LoginPage() {
    return (
        <>
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
            </div>
            <Form />
            <TextLink text="Don't have an account?" route="/register" action="Sign up" />
        </>
    );
}
