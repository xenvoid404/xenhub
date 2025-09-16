import { Form } from '@/app/(auth)/register/components/form';
import { TextLink } from '@/components/text-link';

export default function LoginPage() {
    return (
        <>
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
            </div>
            <Form />
            <TextLink text="Already have an account?" route="/login" action="Sign in" />
        </>
    );
}
