import { PostCard } from '@/app/(main)/(home)/components/post-card';
import { Button } from '@/components/ui/button';
import { getRecentPost } from '@/lib/api/user/post';

export async function RecentPost() {
    const posts = await getRecentPost();

    return (
        <section id="recent-post" className="py-20 px-6">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl mb-4">Postingan Terbaru</h2>
                    <p className="text-sm max-w-2xl mx-auto">Jelajahi artikel, tutorial, dan wawasan terbaru dari tim kami.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PostCard posts={posts} />
                </div>
                <div className="text-center mt-16">
                    <Button variant="outline">Lihat Semua</Button>
                </div>
            </div>
        </section>
    );
}
