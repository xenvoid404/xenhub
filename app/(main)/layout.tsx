import { Header } from '@/app/(main)/components/header';
import { Footer } from '@/app/(main)/components/footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
