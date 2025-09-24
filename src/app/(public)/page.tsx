import BlogCard from '@/components/modules/Blogs/BlogCard';
import Hero from '@/components/modules/Home/Hero';
import { BlogPost } from '@/types';

export default async function HomePage() {
  let blogs: BlogPost[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
      cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch posts');
    const json = await res.json();
    blogs = json?.data?.data || [];
  } catch (error) {
    console.error(error);
    blogs = [];
  }

    return (
        <div>
            <Hero />
        <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
        <div className='grid grid-cols-3 gap-4 max-w-7xl mx-auto my-5'>
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog?.id} post={blog} />)
          ) : (
              <p className='col-span-3 text-center text-2xl text-red-600 mt-20'>No posts found.</p>
          )}
        </div>
        </div>
    );
}
