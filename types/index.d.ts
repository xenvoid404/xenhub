export interface User {
    id: number;
    name: string;
    username?: string;
    avatar?: string | null;
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

export interface Pagination<T> {
    current_page: number;
    data: T;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string | null;
        label: string;
        page: number | null;
        active: boolean;
    };
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface PostData extends Post {
    category: Category;
    user: User;
}
