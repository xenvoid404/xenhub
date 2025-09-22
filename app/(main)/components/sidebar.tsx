'use client';
import { useSidebarStore } from '@/store/sidebar-store';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
    { name: 'Artikel Pilihan', href: '#featured-post' },
    { name: 'Artikel Terbaru', href: '#recent-post' },
    { name: 'Artikel Populer', href: '#popular-post' }
];

export function Sidebar() {
    const { isOpen, close } = useSidebarStore();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-40 bg-background" role="dialog" aria-modal="true" aria-label="Sidebar menu">
            <div className="flex flex-col h-full">
                <div className="flex flex-1 flex-col items-center justify-start pt-24 px-4 sm:px-6">
                    <nav className="flex flex-col items-center gap-6 w-full">
                        <div className="flex flex-col space-y-4">
                            {navItems.map(item => (
                                <Button key={item.name} variant="ghost" className="block" asChild>
                                    <Link href={item.href} onClick={close}>
                                        {item.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </nav>
                </div>
                <nav></nav>
            </div>
        </div>
    );
}
