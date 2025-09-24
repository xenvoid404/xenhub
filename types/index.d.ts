export interface User {
    id: number;
    name?: string;
    username?: string;
    avatar?: string;
    email?: string;
    email_verified_at?: string;
    role: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface Post {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    slug: string;
    image: string;
    excerpt?: string;
    content: string;
    status: string;
    is_featured: boolean;
    view_count: number;
    created_at: string;
    updated_at: string;
}
