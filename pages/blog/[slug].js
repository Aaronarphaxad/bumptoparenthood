import { client, urlFor } from "@/lib/client";
import React from "react";

const BlogDetail = ({ post }) => {
  const { mainImage, category, author, title, body } = post;

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative pt-10 z-10">
      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage: `url(${urlFor(mainImage)})`,
        }}
        title="Woman holding a mug"
      ></div>
      <div className="max-w-2xl mx-auto dark:bg-gray-800">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="dark:text-gray-300 p-5 dark:bg-gray-800">
            <a
              href="#"
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              {category[0]}
            </a>

            <h1 href="#" className="text-gray-900 dark:text-gray-300 font-bold text-3xl mb-2">
              {title}
            </h1>
            <p className="text-gray-700  text-xs mt-2">
              Written By:{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {author?.name}
              </a>
            </p>
            {body?.map((item) => {
              if (item._type === "block") {
                return (
                  <p key={item?._id} className="text-base leading-8 my-5 text-justify">
                    {item?.children[0].text}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
            slug {
                current
            }
        }`;
  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
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
  const post = await client.fetch(query);

  return {
    props: { post },
  };
};

export default BlogDetail;
