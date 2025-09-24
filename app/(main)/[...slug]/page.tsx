import { notFound } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { cache } from 'react';

// Define the types for our data
interface Category {
    name: string;
    slug: string;
}

interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    category: Category;
    subCategory: Category;
    author: string;
    avatar: string;
    date: string;
}

// --- Data Fetching ---
// We use React's `cache` to ensure we only fetch this data once per request.
// Next.js extends `fetch` to automatically memoize requests, but using `cache`
// is a good practice if you use other libraries like axios.
const getAllPosts = cache(async (): Promise<Post[]> => {
    try {
        const { data } = await axios.get('https://api.xenhub.my.id/api/v1/posts/all');
        return data.data.posts;
    } catch (error) {
        return [];
    }
});

// --- Static Generation ---
// This function tells Next.js which pages to build at build time.
export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map(post => ({
        slug: [post.category.slug, post.subCategory.slug, post.slug]
    }));
}

// --- Page Component ---
export default async function ArticlePage({ params }: { params: { slug: string[] } }) {
    // The slug from the URL, e.g., ['category', 'subcategory', 'post-slug']
    const { slug } = params;

    // Fetch all posts (will be cached)
    const posts = await getAllPosts();

    // Find the specific post this page is for
    const post = posts.find(p => p.category.slug === slug[0] && p.subCategory.slug === slug[1] && p.slug === slug[2]);

    // If no post is found for this slug, show a 404 page
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
                    <Image src={post.avatar || '/avatar.png'} alt={post.author} width={50} height={50} className="rounded-full" />
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-slate-400">Published on {post.date}</p>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <div
                className="prose prose-invert prose-lg max-w-none mx-auto"
                // CAUTION: Only use this if you trust the HTML source (e.g., your own CMS).
                // If the content can be created by users, you must sanitize it to prevent XSS attacks.
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
