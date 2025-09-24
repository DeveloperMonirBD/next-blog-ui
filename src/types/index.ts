
export interface BlogPost {
    id: string | number;
    title: string;
    content: string;
    thumbnail?: string;
    views: number;
    author: {
        name: string;
        picture?: string;
        isVerified?: boolean;
    };
    createdAt: string | Date;
}

export interface BlogDetailsPageProps {
    params: { blogId: string };
}