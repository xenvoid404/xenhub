import { AppLogoIcon } from '@/components/app-logo-icon';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-svh flex flex-col items-center justify-center gap-4 p-4">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <AppLogoIcon />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
