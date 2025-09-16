import { MainHeader } from '@/app/(main)/components/main-header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-svh items-center justify-center">
            <div className="flex flex-col flex-1">
                <MainHeader />
                {children}
            </div>
        </div>
    );
}
