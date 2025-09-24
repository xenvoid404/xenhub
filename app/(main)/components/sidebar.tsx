'use client';
import { useSidebarStore } from '@/store/sidebar-store';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Artikel Pilihan', href: '#featured-post' },
    { name: 'Artikel Terbaru', href: '#recent-post' },
    { name: 'Artikel Populer', href: '#popular-post' }
];

export function Sidebar() {
    const { isOpen, close } = useSidebarStore();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
            aria-label="Sidebar menu"
        >
            <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between pt-18 p-2 sm:p-6">
                    <nav className="flex-1 space-y-2">
                        {navItems.map(item => (
                            <Button key={item.name} variant="ghost" className="block" asChild>
                                <Link href={item.href} onClick={close}>
                                    {item.name}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
