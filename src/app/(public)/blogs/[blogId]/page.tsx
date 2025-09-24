import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import { BlogDetailsPageProps, BlogPost } from '@/types';
import { Description } from '@radix-ui/react-dialog';

// export const generateStaticParams = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
//     const json = await res.json();
//     const blogs = json?.data

//     return blogs.slice(0, 2).map((blog: BlogPost) => ({
//         blogId: String(blog.id)
//     }));
// }

export const generateStaticParams = async () => {
    try {
        const res = await fetch(`${process.env.EXT_PUBLIC_BASE_API}/post`);
        if (!res.ok) throw new Error('Failed to fetch posts');
        const json = await res.json();
        const blogs = Array.isArray(json?.data) ? json.data : [];

        return blogs.slice(0, 2).map((blog: BlogPost) => ({
            blogId:String(blog.id)
        }))
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const generateMetadata = async ({ params }: BlogDetailsPageProps) => {
    const { blogId } = params;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
        if(!res.ok) throw new Error(`Failed to fetch blog`)
        const json = await res.json();
        const blog = json?.data;

        return {
            title: blog?.title,
            description: blog?.content
        };
        
    } catch (error) {
        console.log(error)
        return {
            title: 'Blog Not Found'
        }
        
    }
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
    let blog = null;
    const { blogId } = params;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`, {
            cache: 'no-store'
        });

        if (!res.ok) throw new Error('Failed to fetch blog');
        const json = await res.json();
        blog = json?.data;
    } catch (error) {
        console.log(error);
        blog = null;
    }

    return <div className="py-30 px-4 max-w-7xl mx-auto">{blog ? <BlogDetailsCard blog={blog} /> : <p className="col-span-3 text-center text-2xl text-red-600 mt-20">Blog not found</p>}</div>;
};

export default BlogDetailsPage;
