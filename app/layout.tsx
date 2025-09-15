import { type Metadata, type Viewport } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import '@/app/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const calSans = localFont({
    src: './fonts/CalSans-SemiBold.woff2',
    variable: '--font-calsans'
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ]
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL || 'http://localhost:3000'),
    title: {
        default: `${process.env.APP_NAME} - Jelajahi Ide, Inspirasi & Panduan Explorasi Dunia Digital`,
        template: `%s - ${process.env.APP_NAME}`
    },
    description:
        'Xenhub adalah sumber terpercaya Anda untuk wawasan mendalam, panduan praktis, dan inspirasi harian. Jelajahi artikel tentang teknologi, pengembangan diri, gaya hidup, dan tren masa depan. Temukan solusi & rekomendasi untuk setiap kebutuhan Anda!',
    keywords: [
        'dunia digital',
        'panduan digital',
        'tips & trik online',
        'rekomendasi terbaik',
        'review',
        'belajar online',
        'tutorial',
        'inspirasi digital',
        'tren masa depan',
        'solusi digital'
    ],
    authors: [{ name: 'Xenvoid', url: 'https://github.com/xenvoid404' }],
    creator: 'Xenvoid',
    publisher: 'Xenhub',
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: process.env.APP_URL,
        title: `${process.env.APP_NAME} - Jelajahi Ide, Inspirasi & Panduan Explorasi Dunia Digital`,
        description:
            'Xenhub adalah sumber terpercaya Anda untuk wawasan mendalam, panduan praktis, dan inspirasi harian. Jelajahi artikel tentang teknologi, pengembangan diri, gaya hidup, dan tren masa depan. Temukan solusi & rekomendasi untuk setiap kebutuhan Anda!',
        siteName: process.env.APP_NAME,
        images: [
            {
                url: `${process.env.APP_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: process.env.APP_NAME
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `${process.env.APP_NAME} - Jelajahi Ide, Inspirasi & Panduan Explorasi Dunia Digital`,
        description:
            'Xenhub adalah sumber terpercaya Anda untuk wawasan mendalam, panduan praktis, dan inspirasi harian. Jelajahi artikel tentang teknologi, pengembangan diri, gaya hidup, dan tren masa depan. Temukan solusi & rekomendasi untuk setiap kebutuhan Anda!',
        images: [
            {
                url: `${process.env.APP_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: process.env.APP_NAME
            }
        ],
        creator: '@xenvoid404'
    },
    icons: {
        icon: '/favicon.ico'
    },
    manifest: '/site.webmanifest'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${calSans.variable} antialiased`}>{children}</body>
        </html>
    );
}
