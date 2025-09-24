export interface Post {
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
