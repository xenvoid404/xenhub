import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const popularPosts = [
    {
        title: 'Panduan Lengkap Belajar Next.js untuk Pemula',
        author: 'Admin Xenhub',
        date: '1 minggu lalu'
    },
    {
        title: 'Tips & Trik CSS Modern yang Wajib Kamu Coba',
        author: 'Jane Doe',
        date: '2 minggu lalu'
    },
    {
        title: 'Membangun Portofolio Developer yang Menarik',
        author: 'John Smith',
        date: '3 minggu lalu'
    },
    {
        title: 'Perkenalan dengan State Management di React',
        author: 'Admin Xenhub',
        date: '1 bulan lalu'
    },
    {
        title: 'Machine Learning: Dari Konsep ke Implementasi',
        author: 'Jane Doe',
        date: '1 bulan lalu'
    }
];

export function PopularPost() {
    return (
        <section id="popular-post" className="py-20 px-6">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl mb-4">Postingan Populer</h2>
                    <p className="text-sm max-w-2xl mx-auto">Artikel yang paling banyak dibaca dan menjadi favorit komunitas.</p>
                </div>

                <Card className="rounded-2xl">
                    <CardContent className="p-6">
                        <ul className="divide-y divide-border">
                            {popularPosts.map((post, index) => (
                                <li key={index} className="py-4 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 rounded-lg px-4 -mx-4">
                                    <div>
                                        <h3 className="font-medium group-hover:text-purple-300 transition-colors duration-300">{post.title}</h3>
                                        <p className="text-sm text-slate-400">oleh {post.author} - {post.date}</p>
                                    </div>
                                    <span className="text-lg font-semibold text-slate-500">#{index + 1}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
