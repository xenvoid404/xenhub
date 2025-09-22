import Link from 'next/link';
import Image from 'next/image';
import { HamburgerButton } from '@/components/hamburger-button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex flex-col border-b border-muted bg-background backdrop-blur-lg">
            <div className="flex h-14 items-center justify-between px-4 sm:px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label={`${process.env.APP_NAME} - Go to homepage`}>
                        <Image src="/logo-name.png" width={100} height={41} alt={`${process.env.APP_NAME} Logo`} />
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <HamburgerButton />
                </div>
            </div>
        </header>
    );
}
