import { SidebarContent } from '@/app/(main)/components/sidebar-content';
import { getAllCategory } from '@/app/(main)/lib/api';
import { type Category } from '@/types';

interface Menus {
    name: string;
    href?: string;
    subMenus?: Category[];
}

export async function Sidebar() {
    const categories = await getAllCategory();
    const menus: Menus[] = [
        { name: 'Beranda', href: '/' },
        { name: 'Artikel Pilihan', href: '#featured-post' },
        { name: 'Artikel Terbaru', href: '#recent-post' },
        { name: 'Artikel Populer', href: '#popular-post' },
        { name: 'Kategori', subMenus: categories }
    ];

    return <SidebarContent menus={menus} />;
}
