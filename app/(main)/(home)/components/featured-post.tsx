import { PostCard } from '@/app/(main)/(home)/components/post-card';
import { PostList } from '@/app/(main)/(home)/components/post-list';
import { getFeaturedPost } from '@/lib/api/user/post';

export async function FeaturedPost() {
    const posts = await getFeaturedPost();
    const [firstPost, ...restPosts] = posts;

    return (
        <section id="featured-post" className="py-20 px-6">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl mb-4">Artikel Pilihan</h2>
                    <p className="text-sm max-w-2xl mx-auto">Konten evergreen yang telah menginspirasi ribuan pembaca</p>
                </div>

                <div className="grid gap-8">
                    <PostCard post={firstPost} />
                    {restPosts.map(post => (
                        <PostList key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
