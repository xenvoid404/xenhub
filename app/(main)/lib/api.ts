import axios from 'axios';

export interface Category {
    id: number;
    name: string;
    slug: number;
    created_at: string;
    updated_at: string;
}

export const getAllCategory = async (): Promise<Category[]> => {
    try {
        const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/all-category`);
        return data.data.categories;
    } catch (error) {
        console.error('Failed to fetch all posts:', error);
        return [];
    }
};
