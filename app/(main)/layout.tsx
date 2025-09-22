import { Header } from '@/app/(main)/components/header';

export default function MainLayout({ children }: { children: React.ReacNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
