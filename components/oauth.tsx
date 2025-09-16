import { Button } from '@/components/ui/button';
import { signIn } from '@/auth';
import { Icon } from '@/components/ui/icons';

export function Oauth() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
                type="button"
                variant="outline"
                onClick={async () => {
                    'use server';
                    await signIn('google');
                }}
            >
                <Icon.google className="mr-2 size-4" /> Google
            </Button>
            <Button type="button" variant="outline">
                <Icon.facebook className="mr-2 size-4" /> Facebook
            </Button>
            <Button type="button" variant="outline">
                <Icon.github className="mr-2 size-4" /> Github
            </Button>
        </div>
    );
}
