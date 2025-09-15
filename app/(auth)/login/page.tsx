import { Form } from '@/app/(auth)/login/components/form';

export default function LoginPage() {
    return (
        <>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
            <Form />
        </>
    );
}
