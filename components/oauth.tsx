import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Icon } from '@/components/ui/icons';

export function Oauth() {
    return (
        <>
            <div className="grid grid-cols-2 items-center justify-center gap-2">
                <Button type="button" variant="outline">
                    <Icon.google className="mr-2 size-4" /> Google
                </Button>
                <Button type="button" variant="outline">
                    <Icon.github className="mr-2 size-4" /> Github
                </Button>
            </div>
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
