'use client';
import { useSidebarStore } from '@/store/sidebar-store';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export function SidebarContent({ menus }) {
    const { isOpen, close } = useSidebarStore();
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const handleMenuClick = index => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
            aria-label="Sidebar menu"
        >
            <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between pt-18 p-2 sm:p-4">
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {menus.map((item, index) => (
                                <li key={item.name}>
                                    {item.subMenus ? (
                                        <>
                                            <Button
                                                variant="ghost"
                                                className="flex w-full items-center justify-between"
                                                onClick={() => handleMenuClick(index)}
                                            >
                                                <span className="ml-1">{item.name}</span>
                                                <Icon.chevronDown
                                                    className={`size-5 transition-transform ${openMenuIndex === index ? 'rotate-180' : ''}`}
                                                />
                                            </Button>
                                            {openMenuIndex === index && (
                                                <ul className="pl-4 mt-2 space-y-1">
                                                    {item.subMenus.map(subMenu => (
                                                        <li key={subMenu.name}>
                                                            <Button variant="ghost" className="w-full justify-start" asChild>
                                                                <Link href={`/category/${subMenu.slug}`} onClick={close}>
                                                                    {subMenu.name}
                                                                </Link>
                                                            </Button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Button variant="ghost" className="w-full justify-start" asChild>
                                            <Link href={item.href} onClick={close}>
                                                <span className="flex-1 text-left">{item.name}</span>
                                            </Link>
                                        </Button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
