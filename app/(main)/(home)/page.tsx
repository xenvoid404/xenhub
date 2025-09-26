import { Hero } from '@/app/(main)/(home)/components/hero';
import { RecentPost } from '@/app/(main)/(home)/components/recent-post';
import { Newsletter } from '@/app/(main)/(home)/components/newsletter';
import { type PostData, type Pagination } from '@/types';
import { getRecentPost } from '@/lib/api/user/post';

export default async function Page() {
    const initialData = await getRecentPost(1, { next: { revalidate: 60 } });
    const initialPosts: PostData[] = initialData.data.data;
    const initialLastPage: number = initialData.data.last_page;

    return (
        <>
            <Hero />
            <RecentPost initialPosts={initialPosts} initialLastPage={initialLastPage} />
            <Newsletter />
        </>
    );
}
