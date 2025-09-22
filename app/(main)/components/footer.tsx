import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/icon';

const navigation = {
    solutions: [
        { name: 'Beranda', href: '/' },
        { name: 'Artikel', href: '#' },
        { name: 'Tentang Kami', href: '#' },
        { name: 'Kontak', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: Icon.facebook,
        },
        {
            name: 'GitHub',
            href: '#',
            icon: Icon.github,
        },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-muted bg-background" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Image src="/logo-name.png" width={120} height={49} alt={`Xenhub Logo`} />
                        <p className="text-sm leading-6 text-slate-400">
                            Platform untuk belajar pengembangan web, desain, dan teknologi terkini. Tingkatkan skill Anda bersama kami.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-slate-500 hover:text-slate-400">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6">Navigasi</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-slate-400 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                             <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6">Kategori</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Teknologi</a></li>
                                    <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Bisnis</a></li>
                                    <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Desain</a></li>
                                    <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Produktifitas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-muted pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-slate-500">&copy; {new Date().getFullYear()} Xenhub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
