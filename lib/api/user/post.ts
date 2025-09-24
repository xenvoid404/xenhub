import axios from 'axios';
import { type Post, type Category, type User } from '@/types';

export interface PostData {
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

export async function getFeaturedPost(): Promise<PostData[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/post/featured`);
    return data.data.posts;
}

export async function getRecentPost(): Promise<PostData[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/post/recent`);
    return data.data.posts;
}

export async function getPopularPost(): Promise<PostData[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/post/popular`);
    return data.data.posts;
}

export async function getAllPost(): Promise<PostData[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/post/all`);
    return data.data.posts;
}
