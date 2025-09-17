import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const administrator = await prisma.user.upsert({
        where: { email: 'yunwangshu@gmail.com' },
        update: {},
        create: {
            name: 'Yun Wangshu',
            username: 'yun_wangshu',
            email: 'yunwangshu@gmail.com',
            emailVerifiedAt: null,
            password: await bcrypt.hash('123@Wangshu', 10)
        }
    });

    const technology = await prisma.category.upsert({
        where: { name_slug: { name: 'Teknologi', slug: 'teknologi' } },
        update: {},
        create: {
            name: 'Teknologi',
            slug: 'teknologi'
        }
    });

    const subTechnology = await prisma.subCategory.createMany({
        data: [
            {
                name: 'Artificial Intelligence',
                slug: 'artificial-intelligence',
                categoryId: technology.id
            },
            {
                name: 'Programming',
                slug: 'programming',
                categoryId: technology.id
            }
        ],
        skipDuplicates: true
    });

    console.log('All seeders migrate successful');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
