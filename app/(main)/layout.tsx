import { Header } from '@/app/(main)/components/header';
import { Footer } from '@/app/(main)/components/footer';
import { Sidebar } from '@/app/(main)/components/sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
