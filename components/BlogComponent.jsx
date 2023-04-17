import { urlFor } from "@/lib/client";
import Link from "next/link";
import React from "react";

const BlogComponent = ({ post }) => {
  const { mainImage, title, author, category, _createdAt, body, slug } = post;
  const date = new Date(_createdAt);
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;


  return (
    <section className="flex flex-col justify-center antialiased text-gray-500 dark:text-gray-200 shadow mb-5">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <Link
            className="relative block group"
            href={`/blog/${slug?.current}`}
          >
            <div
              className="absolute inset-0 bg-gray-800 dark:bg-gray-300 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
              aria-hidden="true"
            ></div>
            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
              <img
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={urlFor(mainImage)}
                width="540"
                height="303"
                alt="Blog post"
              />
            </figure>
          </Link>
          <div>
            <header>
              <div className="mb-3">
                <ul className="flex flex-wrap text-xs font-medium -m-1">
                  <li className="m-1">
                    <span className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-rose-300 hover:bg-rose-500 transition duration-150 ease-in-out">
                      {category[0]}
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                <Link
                  className="hover:text-gray-100 transition duration-150 ease-in-out"
                  href={`/blog/${slug?.current}`}
                >
                  {title}
                </Link>
              </h3>
            </header>
            <p className="text-lg text-gray-400 flex-grow text-justify">
              {body[0].children[0]?.text}
            </p>
            <footer className="flex items-center mt-4">
              <Link href={`/blog/${slug?.current}`}>
                <img
                  className="rounded flex-shrink-0 mr-4"
                  src={author?.image}
                  width="40"
                  height="40"
                  alt="Author"
                />
              </Link>
              <div>
                <Link
                  className="font-medium text-gray-500 dark:text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                  href={`/blog/${slug?.current}`}
                >
                  {author?.name}
                </Link>
                <span className="text-gray-700"> - </span>
                <span className="text-gray-500">{formattedDate}</span>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogComponent;
