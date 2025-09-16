import { Oauth } from '@/components/oauth';
import { Separator } from '@/components/ui/separator';

export function Form() {
    return (
        <>
            <Oauth />
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
        </>
    );
}
