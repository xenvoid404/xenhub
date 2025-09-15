import Image from 'next/image';
import Link from 'next/link';

export function AppLogoIcon() {
    return (
        <Link href="/" className="aspect-square rounded-full object-cover">
            <Image src="/logo-name.png" width={1540} height={648} alt={`${process.env.APP_NAME} Logo`} priority />
        </Link>
    );
}
