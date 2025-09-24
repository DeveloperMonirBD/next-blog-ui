import BlogCard from "@/components/modules/Blogs/BlogCard";
import { BlogPost } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "All Blogs | Next Blog",
    description: "Browse all blog posts on web development, Next.js, React and more. Stay updated with the latest lutorials and articales.",
}


const AllBlogsPage = async() => {
    let blogs: BlogPost[] = [];

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
          cache:"no-store"
      });
      if (!res.ok) throw new Error(`Faield to fetch posts`);
      const json = await res.json();
      blogs = json?.data?.data || []
    } catch (error) {
        console.log(error);
        blogs = [];
    }
    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl">All Blogs</h2>
            <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto my-5">
                {blogs.length > 0 ? blogs.map(blog => <BlogCard key={blog?.id} post={blog} />) : <p className="col-span-3 text-center text-2xl text-red-600 mt-20">No posts found.</p>}
            </div>
        </div>
    );
};

export default AllBlogsPage;
