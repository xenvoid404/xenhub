'use server';
import axios from 'axios';
import { type PostData, type Pagination } from '@/types';

export interface RecentPostApiResponse {
    status: string;
    message: string;
    data: Pagination<PostData[]>;
}

export async function getRecentPost(page: number, options?: RequestInit): Promise<RecentPostApiResponse> {
    const url = `${process.env.BACKEND_ENDPOINT}/v1/post/recent?page=${page}`;

    try {
        const response = await fetch(url, { ...options });
        if (!response.ok) {
            throw new Error(`Gagal mengambil data, status: ${response.status}`);
        }

        const data: RecentPostApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Kesalahan saat fetching getRecentPost:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

export async function getAllPost(): Promise<PostData[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/post/all`);
    return data.data;
}
