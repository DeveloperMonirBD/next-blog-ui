export const getBlogById = async (blogId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
    if (!res.ok) throw new Error(`Failed to fetch blog`);
    const json = await res.json();
    const blog = json?.data;
    return blog
}