import { PostCard } from '@/app/(main)/(home)/components/post-card';
import { getFeaturedPost } from '@/lib/api/user/post';

export async function FeaturedPost() {
    const posts = await getFeaturedPost();

    return (
        <section id="featured-post" className="py-20 px-6">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl mb-4">Artikel Pilihan</h2>
                    <p className="text-sm max-w-2xl mx-auto">Konten evergreen yang telah menginspirasi ribuan pembaca</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PostCard posts={posts} />
                </div>
            </div>
        </section>
    );
}
