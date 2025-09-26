'use client';
import { PostCard } from '@/app/(main)/(home)/components/post-card';
import { type PostData } from '@/types';
import { getRecentPost } from '@/lib/api/user/post';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/icon';

interface RecentPostProps {
    initialPosts: PostData[];
    initialLastPage: number;
}

export function RecentPost({ initialPosts, initialLastPage }: RecentPostProps) {
    const [posts, setPosts] = useState<PostData[]>(initialPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(initialLastPage);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleMorePost = async () => {
        if (currentPage >= lastPage || isLoading) return;

        setIsLoading(true);
        try {
            const response = await getRecentPost(currentPage + 1);
            const newPosts = response.data.data;

            setPosts(prevPosts => [...prevPosts, ...newPosts]);
            setCurrentPage(prevPage => prevPage + 1);
            setLastPage(response.data.last_page);
        } catch (error) {
            console.error('Gagal memuat postingan lainnya:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!posts || posts.length === 0) {
        return (
            <section id="recent-post" className="mt-10 px-6 pb-10 border-b">
                <div className="mx-auto">
                    <h2 className="text-xl md:text-2xl mb-4">Postingan Terbaru</h2>
                    <p>Tidak ada postingan untuk ditampilkan.</p>
                </div>
            </section>
        );
    }

    const [firstPost, ...restPosts] = posts;

    return (
        <section id="recent-post" className="mt-10 px-6 pb-16 border-b">
            <div className="mx-auto">
                <h2 className="text-xl md:text-2xl mb-4">Postingan Terbaru</h2>
                <div className="mb-8">
                    <PostCard post={firstPost} />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                {currentPage < lastPage && (
                    <div className="text-center mt-16">
                        <Button variant="outline" disabled={isLoading} onClick={handleMorePost}>
                            {isLoading && <Icon.loaderCircle className="absolute animate-spin" />}
                            <span className={isLoading ? 'invisible' : 'visible'}>Lihat Postingan Lainnya</span>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
