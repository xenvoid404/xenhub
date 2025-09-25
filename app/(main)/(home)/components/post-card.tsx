import { type PostData } from '@/lib/api/user/post';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icon';
import Link from 'next/link';
import { formatCompactNumber } from '@/lib/utils';

interface PostCardProps {
    post: PostData;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Link href={`/${post.category.slug}/${post.slug}`}>
            <Card className="rounded-2xl overflow-hidden group cursor-pointer flex flex-col pt-0 h-full">
                <div className="aspect-video object-contain bg-gradient-to-r from-accent/20 to-background">
                    <Image src={post.image} width={1280} height={720} alt={post.title} />
                </div>
                <div className="flex flex-col flex-grow space-y-2">
                    <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                            <Badge className="text-accent">{post.category.name}</Badge>
                            <Badge variant="secondary">
                                <Icon.eye className="size-4" /> {formatCompactNumber(post.view_count)}
                            </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold md:text-xl group-hover:text-purple-300 transition-colors duration-300">
                            {post.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription className="leading-relaxed line-clamp-3">{post.excerpt || post.content}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-background rounded-full">
                                <Image src={post.user.avatar || '/avatar.png'} width={50} height={50} alt={post.user.name} />
                            </div>
                            <div>
                                <p className="text-sm font-medium">
                                    {`${post.user.name} (${post.user.role.charAt(0).toUpperCase()}${post.user.role.slice(1)})`}
                                </p>
                                <p className="text-xs md:text-sm text-slate-400">{post.created_at}</p>
                            </div>
                        </div>
                    </CardFooter>
                </div>
            </Card>
        </Link>
    );
}
