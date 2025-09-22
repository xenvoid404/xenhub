import { Hero } from '@/app/(main)/(home)/components/hero';
import { FeaturedPost } from '@/app/(main)/(home)/components/featured-post';
import { RecentPost } from '@/app/(main)/(home)/components/recent-post';
import { PopularPost } from '@/app/(main)/(home)/components/popular-post';
import { Newsletter } from '@/app/(main)/(home)/components/newsletter';

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedPost />
            <RecentPost />
            <PopularPost />
            <Newsletter />
        </>
    );
}
