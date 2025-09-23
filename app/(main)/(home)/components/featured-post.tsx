import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: {
    name: string;
    slug: string;
  };
  subCategory: {
    name: string;
    slug: string;
  };
  author: string;
  date: string;
  user: {
    avatar: string;
  };
}

async function getFeaturedPosts(): Promise<Post[]> {
  try {
    const { data } = await axios.get('https://api.xenhub.my.id/api/v1/featured-post');
    return data.data.posts;
  } catch (error) {
    console.error("Failed to fetch featured posts:", error);
    return [];
  }
}

export async function FeaturedPost() {
  const posts = await getFeaturedPosts();

  return (
    <section id="featured-post" className="py-20 px-6">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">Artikel Pilihan</h2>
          <p className="text-sm max-w-2xl mx-auto">Konten evergreen yang telah menginspirasi ribuan pembaca</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/${post.category.slug}/${post.subCategory.slug}/${post.slug}`}>
              <Card className="rounded-2xl overflow-hidden hover-lift group cursor-pointer flex flex-col pt-0 h-full">
                <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.name}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-purple-300 transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="leading-relaxed line-clamp-3">{post.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-background rounded-full">
                        <Image src={post.user.avatar || "/avatar.png"} width={50} height={50} alt={post.author} />
                      </div>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-slate-400">{post.date}</p>
                      </div>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
