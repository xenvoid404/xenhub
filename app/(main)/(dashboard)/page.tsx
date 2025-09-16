import Image from 'next/image';

export default function Page() {
    const posts = [
        {
            id: '1',
            title: 'The Future of Artificial Intelligence',
            author: 'Jane Doe',
            date: '2025-09-16',
            image: '/file.svg',
            excerpt: 'An in-depth look at the rapid advancements in AI and what they mean for humanity.'
        },
        {
            id: '2',
            title: 'Getting Started with Next.js 15',
            author: 'John Smith',
            date: '2025-09-15',
            image: '/file.svg',
            excerpt: 'A beginner-friendly guide to building modern web applications with the latest version of Next.js.'
        },
        {
            id: '3',
            title: 'A Deep Dive into Prisma ORM',
            author: 'Emily White',
            date: '2025-09-14',
            image: '/file.svg',
            excerpt: 'Learn how to leverage the power of Prisma to manage your database with ease and confidence.'
        },
        {
            id: '4',
            title: 'The Rise of Server Components',
            author: 'Michael Brown',
            date: '2025-09-13',
            image: '/file.svg',
            excerpt: 'Exploring the paradigm shift in web development with React Server Components.'
        }
    ];

    const featuredPost = posts[0];
    const recentPosts = posts.slice(1);

    return (
        <div className="container mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>

            {/* Featured Post */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Featured Post</h2>
                <div className="relative rounded-lg overflow-hidden h-96">
                    <Image src={featuredPost.image} alt={featuredPost.title} layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                        <h3 className="text-white text-3xl font-bold">{featuredPost.title}</h3>
                        <p className="text-gray-300 mt-2">{featuredPost.excerpt}</p>
                        <div className="text-gray-400 text-sm mt-4">
                            <span>By {featuredPost.author}</span>
                            <span className="mx-2">•</span>
                            <span>{featuredPost.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Posts */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {recentPosts.map(post => (
                        <div key={post.id} className="border rounded-lg overflow-hidden">
                            <div className="relative h-48">
                                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
                                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                                <div className="text-gray-500 text-xs">
                                    <span>By {post.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}