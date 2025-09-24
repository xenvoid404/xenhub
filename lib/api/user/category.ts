import axios from 'axios';
import { type Category } from '@/types';

export async function getAllCategory(): Promise<Category[]> {
    const { data } = await axios.get(`${process.env.BACKEND_ENDPOINT}/v1/category/all`);
    return data.data.categories;
}
