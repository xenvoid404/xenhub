import { type PostData } from '@/lib/api/user/post';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icon';
import { formatCompactNumber } from '@/lib/utils';

interface PostListProps {
    post: PostData;
}

export function PostList({ post }: PostListProps) {
    return (
        <Link href={`/${post.category.slug}/${post.slug}`}>
            <Card className="rounded-xl">
                <CardContent className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image src={post.image} width={1280} height={720} alt={post.title} className="w-20 h-20 object-cover rounded-md" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge className="text-accent">{post.category.name}</Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                                <Icon.eye className="size-4" />
                                {formatCompactNumber(post.view_count)}
                            </Badge>
                        </div>
                        <h3 className="text-sm font-medium mb-1">{post.title}</h3>
                        <CardDescription className="leading-relaxed line-clamp-2">{post.excerpt || post.content}</CardDescription>
                    </div>
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
            </Card>
        </Link>
    );
}
