import { type Post } from '@/app/(main)/(home)/types';
import axios from 'axios';

export async function getFeaturedPost(): Promise<Post[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/featured-post`);
    return data.data.posts;
}

export async function getNewestPost(): Promise<Post[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/newest-post`);
    return data.data.posts;
}

export async function getPopularPost(): Promise<Post[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/popular-post`);
    return data.data.posts;
}
