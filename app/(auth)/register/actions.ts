'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const registerSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
});

export async function register(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const parsed = registerSchema.safeParse(data);

    if (!parsed.success) {
        return { error: 'Invalid data' };
    }

    if (parsed.data.password !== parsed.data.confirmPassword) {
        return { error: 'Passwords do not match' };
    }

    const hashedPassword = await bcrypt.hash(parsed.data.password, 10);

    try {
        await prisma.user.create({
            data: {
                name: parsed.data.name,
                username: parsed.data.username,
                email: parsed.data.email,
                password: hashedPassword
            }
        });
        return { success: 'User created' };
    } catch (error) {
        return { error: 'User already exists' };
    }
}
