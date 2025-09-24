import axios from 'axios';
import { type Category } from '@/types';

export const getAllCategory = async (): Promise<Category[]> => {
    try {
        const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/all-category`);
        return data.data.categories;
    } catch (error) {
        console.error('Failed to fetch all posts:', error);
        return [];
    }
};
