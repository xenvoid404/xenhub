import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export async function MainHeader() {
    const subcategories = [
        { id: 1, name: 'Artificial Intelligence' },
        { id: 2, name: 'Programming' }
    ];

    return (
        <header className="sticky top-0 z-50 flex flex-col border-b border-muted bg-background/80 backdrop-blur-md">
            <div className="flex h-14 items-center justify-between px-4 sm:px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label={`${process.env.APP_NAME} - Go to homepage`}>
                        <Image src="/logo-name.png" width={100} height={41} alt="Xenhub" />
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <Button variant="outline" size="icon">
                        <Icon.menu className="size-5" />
                    </Button>
                </div>
            </div>
            <div className="px-4 sm:px-6">
                <div className="flex items-center gap-2 w-full py-1">
                    <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
                        {subcategories.map(subcategory => (
                            <Button key={subcategory.id} variant="ghost">
                                {subcategory.name}
                            </Button>
                        ))}
                    </div>
                    <div className="ml-auto pl-2">
                        <Button variant="outline" size="icon">
                            <Icon.search className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
