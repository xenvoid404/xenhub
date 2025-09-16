import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function MainHeader() {
    return (
        <header className="sticky top-0 z-50 flex h-14 items-center border-b border-muted bg-background/80 backdrop-blur-md">
            <div className="flex w-full items-center justify-between px-4 sm:px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label={`${process.env.APP_NAME} - Go to homepage`}>
                        <Image src="/logo-name.png" width={100} height={41} />
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <Button variant="outline" size="icon">
                        <Icon.menu className="size-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
