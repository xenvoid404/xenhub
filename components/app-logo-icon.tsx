import Image from 'next/image';
import Link from 'next/link';

export function AppLogoIcon() {
    return (
        <Link href="/" className="rounded-xl object-cover">
            <Image src="/logo-name.png" width={154} height={64} alt={`${process.env.APP_NAME} Logo`} priority />
        </Link>
    );
}
