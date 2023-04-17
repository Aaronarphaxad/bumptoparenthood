import BlogComponent from "@/components/BlogComponent";
import { client } from "@/lib/client";
import React from "react";

const BlogPage = ({ posts }) => {
  return (
    <div className="w-screen py-10 ">
      <h1 className="font-bold text-2xl text-center pb-10">Blog</h1>

      {posts?.map((item) => {
        return <BlogComponent key={item._id} post={item} />;
      })}
      {!posts && (
        <div className="my-20 text-bold text-center text-2xl">
          No blog content available :(
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
      title,
      mainImage,
      slug,
      body,
      _createdAt,
      "author": author->{
        name,
        "image": image.asset->url
      },
      "category": categories[]->title
  }`;
  try {
    const posts = await client.fetch(query);
    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: { posts: [] }, // set a default value for services
    };
  }
};

export default BlogPage;
