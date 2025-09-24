'use client';
import { useSidebarStore } from '@/store/sidebar-store';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export function SidebarContent({ menus }) {
    const { isOpen, close } = useSidebarStore();
    const [isCategoryOpen, setCategoryOpen] = useState();

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
                        {menus.map((item, index) => (
                            <li key={index}>
                                {item.subMenus ? (
                                    <>
                                        <Button variant="ghost" className="w-full justify-between" onClick={() => setCategoryOpen(!isCategoryOpen)}>
                                            {item.name}
                                            <Icon.chevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                                        </Button>
                                        {item.subMenus.map((subMenu, index) => (
                                            <Button key={index} variant="ghost" className="block" asChild>
                                                <Link href={`/category/${subMenu.slug}`} onClick={close}>
                                                    {subMenu.name}
                                                </Link>
                                            </Button>
                                        ))}
                                    </>
                                ) : (
                                    <Button key={item.name} variant="ghost" className="block" asChild>
                                        <Link href={item.href} onClick={close}>
                                            {item.name}
                                        </Link>
                                    </Button>
                                )}
                            </li>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
