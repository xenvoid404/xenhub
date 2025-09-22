import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const posts = [
    {
        category: 'Teknologi',
        title: 'Masa Depan Artificial Intelligence dalam Transformasi Digital',
        description: 'Analisis mendalam tentang bagaimana AI akan mengubah landscape bisnis dan kehidupan sehari-hari dalam dekade mendatang.',
        author: 'Admin Xenhub',
        date: '2 hari lalu'
    },
    {
        category: 'Bisnis',
        title: 'Strategi Pemasaran Digital untuk Startup',
        description: 'Panduan lengkap untuk membangun strategi pemasaran digital yang efektif untuk startup dengan budget terbatas.',
        author: 'Jane Doe',
        date: '3 hari lalu'
    },
    {
        category: 'Desain',
        title: 'Prinsip-prinsip Desain UI/UX yang Baik',
        description: 'Pelajari prinsip-prinsip dasar desain UI/UX yang akan membantu Anda membuat produk yang disukai pengguna.',
        author: 'John Smith',
        date: '4 hari lalu'
    },
    {
        category: 'Produktifitas',
        title: 'Cara Meningkatkan Fokus dan Produktivitas Kerja',
        description: 'Tips dan trik untuk membantu Anda tetap fokus dan produktif saat bekerja dari rumah atau di kantor.',
        author: 'Admin Xenhub',
        date: '5 hari lalu'
    },
    {
        category: 'Gaya Hidup',
        title: 'Menjaga Keseimbangan Antara Kehidupan Kerja dan Pribadi',
        description: 'Pentingnya menjaga keseimbangan antara kehidupan kerja dan pribadi untuk kesehatan mental dan fisik Anda.',
        author: 'Jane Doe',
        date: '6 hari lalu'
    },
    {
        category: 'Keuangan',
        title: 'Investasi Jangka Panjang untuk Pemula',
        description: 'Panduan untuk memulai investasi jangka panjang bagi pemula dengan risiko yang terukur.',
        author: 'John Smith',
        date: '7 hari lalu'
    }
];

export function FeaturedPost() {
    return (
        <section id="featured-post" className="py-20 px-6">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl mb-4">Artikel Pilihan</h2>
                    <p className="text-sm max-w-2xl mx-auto">Konten evergreen yang telah menginspirasi ribuan pembaca</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Card key={index} className="rounded-2xl overflow-hidden hover-lift group cursor-pointer flex flex-col pt-0">
                            <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 relative">
                                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <CardHeader>
                                    <CardTitle className="text-xl md:text-2xl group-hover:text-purple-300 transition-colors duration-300">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="leading-relaxed line-clamp-3">{post.description}</CardDescription>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between mt-auto pt-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-background rounded-full">
                                            <Image src="/avatar.png" width={50} height={50} alt="User Logo" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{post.author}</p>
                                            <p className="text-sm text-slate-400">{post.date}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
