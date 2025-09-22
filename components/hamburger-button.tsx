'use client';
import { useSidebarStore } from '@/store/sidebar-store';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';

export function HamburgerButton() {
    const { isOpen, toggle } = useSidebarStore();

    return (
        <Button type="button" variant="ghost" size="icon" onClick={toggle} aria-label="Toggle navigation menu">
            {isOpen ? <Icon.x className="size-5" /> : <Icon.menu className="size-5" />}
        </Button>
    );
}
