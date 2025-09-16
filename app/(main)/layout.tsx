import { MainHeader } from '@/app/(main)/components/main-header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-svh flex-col">
            <MainHeader />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
