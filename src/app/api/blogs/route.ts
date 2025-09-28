import { request } from "http";
import { NextResponse } from "next/server";

export const blogs = [
    {
        id: 1,
        title: 'This is post title',
        content: 'This is post content',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: true,
        tags: ['blog', 'ph', 'web', 'next', 'DB'],
        views: 4,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T03:38:51.665Z',
        updatedAt: '2025-09-26T11:55:39.055Z',
        deletedAt: null
    },
    {
        id: 2,
        title: 'This is post title 2',
        content: 'This is post content 2',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: false,
        tags: ['blog', 'ph', 'web', 'next'],
        views: 15,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T03:42:18.109Z',
        updatedAt: '2025-09-23T12:17:55.046Z',
        deletedAt: null
    },
    {
        id: 3,
        title: 'This is post title3',
        content: 'This is post content3',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: true,
        tags: ['blog', 'ph', 'web', 'next', 'DB'],
        views: 11,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T03:44:34.160Z',
        updatedAt: '2025-09-23T11:45:28.839Z',
        deletedAt: null
    },
    {
        id: 5,
        title: 'This is post title 4',
        content: 'This is post content 4',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: false,
        tags: ['blog', 'ph', 'web', 'next'],
        views: 5,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T07:47:09.617Z',
        updatedAt: '2025-09-23T11:24:02.757Z',
        deletedAt: null
    },
    {
        id: 6,
        title: 'This is post title 5',
        content: 'This is post content 5',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: false,
        tags: ['blog', 'ph', 'web', 'next'],
        views: 5,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T07:47:24.592Z',
        updatedAt: '2025-09-23T11:09:15.353Z',
        deletedAt: null
    },
    {
        id: 7,
        title: 'This is post title 6',
        content: 'This is post content 6',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: false,
        tags: ['blog', 'ph', 'web', 'next'],
        views: 2,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T07:47:38.461Z',
        updatedAt: '2025-09-24T05:41:34.010Z',
        deletedAt: null
    },
    {
        id: 8,
        title: 'This is post title 7',
        content: 'This is post content 7',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: false,
        tags: ['blog', 'ph', 'web', 'next'],
        views: 2,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-15T07:47:48.290Z',
        updatedAt: '2025-09-24T05:41:16.624Z',
        deletedAt: null
    },
    {
        id: 9,
        title: 'Getting Started with Next.js',
        content: 'Next.js introduce new features for building fast and scalable web applications. Learn how to  set up your first project and explore its App Route.',
        thumbnail: 'https://ph.com/thumb.jpg',
        isFeatured: true,
        tags: ['Next.js', 'React', 'Web Developer', 'NextJs'],
        views: 6,
        authorId: 9,
        author: {
            id: 9,
            name: 'Sadman',
            email: 'Sadman@gmail.com',
            phone: '01726294543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-22T06:25:51.553Z',
            updatedAt: '2025-09-22T06:25:51.553Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-22T06:31:45.148Z',
        updatedAt: '2025-09-24T05:43:25.839Z',
        deletedAt: null
    },
    {
        id: 10,
        title: 'Getting Started With React Server Actions',
        content:
            "React Server Actions are a powerful feature that allows you to perform server-side operations directly from your React components. This approach simplifies data fetching, state management, and server-side logic by integrating them seamlessly into your React application. Here's a concise guide to help you get started:",
        thumbnail:
            'https://www.bing.com/images/search?view=detailV2&ccid=lXZAzz2U&id=E8189229D62EC65A95E0379AD604BA6297724A7B&thid=OIP.lXZAzz2UVBpOEqQkN-T3GAHaD4&mediaurl=https%3a%2f%2fstrapi.dhiwise.com%2fuploads%2fBlog_Common_Image_Next_OG_Image_8ab5e85f77.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.957640cf3d94541a4e12a42437e4f718%3frik%3de0pyl2K6BNaaNw%26pid%3dImgRaw%26r%3d0&exph=1260&expw=2400&q=nextjs&FORM=IRPRST&ck=C6EC1308890713E855AD03047544237C&selectedIndex=14&itb=0',
        isFeatured: true,
        tags: ['NextJs', 'React', 'Postgres', 'Server', 'Actions'],
        views: 1,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-24T11:09:59.341Z',
        updatedAt: '2025-09-24T11:10:26.098Z',
        deletedAt: null
    },
    {
        id: 11,
        title: 'abc',
        content: 'abc kj;lgjalkg gjlk;aglkahgl oajgkljahglkjhalkig alikjihglkjahlgkja klgalkjglkjagkhaljkgha afdganglkahlog aakljghlkajghlkagh gahljkghalkjghakjl',
        thumbnail: 'https://images.ctfassets.net/ct0aopd36mqt/wp-thumbnail-7b06d87a3f07af68afd7961db1810825/6cc198689444c7d6f4cd3b561ea8431f/new-nextjs.png',
        isFeatured: true,
        tags: ['NextJs', 'React', 'Postgres', 'Server', 'Actions'],
        views: 2,
        authorId: 1,
        author: {
            id: 1,
            name: 'Monir',
            email: 'mrmonir0558@gmail.com',
            phone: '01745234543',
            pictures: null,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: '2025-09-14T05:48:22.322Z',
            updatedAt: '2025-09-14T05:48:22.322Z',
            deletedAt: null
        },
        published: false,
        createdAt: '2025-09-26T11:06:50.268Z',
        updatedAt: '2025-09-26T11:52:31.399Z',
        deletedAt: null
    }
];

export async function GET() {
    return Response.json(blogs);
}

export const POST = async (request: Request) => {
    const blog = await request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1,
    }

    blogs.push(newBlog);
    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-type": "application/json"
        }
    })
}
