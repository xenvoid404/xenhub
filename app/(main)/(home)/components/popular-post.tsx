import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getPopularPost } from '@/lib/api/user/post';
import { PostList } from '@/app/(main)/(home)/components/post-list';

export async function PopularPost() {
    const posts = await getPopularPost();

    return (
        <section id="popular-post" className="py-20 px-6">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl mb-4">Postingan Populer</h2>
                    <p className="text-sm max-w-2xl mx-auto">Artikel yang paling banyak dibaca dan menjadi favorit komunitas.</p>
                </div>

                <div className="grid gap-8">
                    {posts.map(post => (
                        <PostList key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
