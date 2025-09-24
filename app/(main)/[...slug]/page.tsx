import { notFound } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { cache } from 'react';
import { type Category, type Post, type User } from '@/types';

interface AllPost {
    id: number;
    title: string;
    slug: string;
    image: string;
    excerpt: string | null;
    content: string;
    status: string;
    is_featured: boolean;
    view_count: number;
    created_at: string;
    updated_at: string;
    category: {
        name: string;
        slug: string;
    };
    user: {
        name: string;
        avatar: string;
        role: string;
    };
}

const getAllPosts = cache(async (): Promise<AllPost[]> => {
    try {
        const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/posts/all`);
        return data.data.posts;
    } catch (error) {
        return [];
    }
});

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map(post => ({
        slug: [post.category.slug, post.slug]
    }));
}

export default async function ArticlePage({ params }: { params: { slug: string[] } }) {
    const { slug } = await params;
    const posts = await getAllPosts();
    const post = posts.find(p => p.category.slug === slug[0] && p.slug === slug[1]);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto py-20 px-6">
            {/* Article Header */}
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
            <div className="prose prose-invert prose-lg max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
}
