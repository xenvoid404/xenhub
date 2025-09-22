'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useSidebarStore } from '@/store/sidebar-store';
import Link from 'next/link';

const navItems = [
    { name: 'Artikel Pilihan', href: '#featured-post' },
    { name: 'Artikel Terbaru', href: '#recent-post' },
    { name: 'Artikel Populer', href: '#popular-post' },
];

export function Sidebar() {
    const { isOpen, close } = useSidebarStore();

    return (
        <Sheet open={isOpen} onOpenChange={close}>
            <SheetContent className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-0 pt-14">
                <div className="p-6">
                    <SheetHeader className="text-left mb-8">
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <nav>
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={close}
                                        className="block text-lg font-medium text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
}
