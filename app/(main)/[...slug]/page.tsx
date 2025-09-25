import { notFound } from 'next/navigation';
import { type PostData, getAllPost } from '@/lib/api/user/post';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote-client/rsc';

export async function generateStaticParams() {
    const posts = await getAllPost();
    return posts.map(post => ({
        slug: [post.category.slug, post.slug]
    }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
    const { slug } = await params;
    const posts = await getAllPost();
    const post = posts.find(p => p.category.slug === slug[0] && p.slug === slug[1]);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto py-20 px-6">
            <header className="text-center mb-12">
                <div className="mb-4">
                    <span className="text-purple-400 font-medium">{post.category.name}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
                <div className="flex items-center justify-center space-x-4">
                    <Image src={post.user.avatar || '/avatar.png'} alt={post.user.name} width={50} height={50} className="rounded-full" />
                    <div>
                        <p className="font-semibold">{post.user.name}</p>
                        <p className="text-sm text-slate-400">Published on {post.created_at}</p>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <div className="prose max-w-none mx-auto">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
