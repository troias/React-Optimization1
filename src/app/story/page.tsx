import React from "react";
import Link from "next/link";
import { steps } from "../../lib/info";

const pageInfo = [
  {
    title: "The Process Behind My Work",
    description:
      "Looking to see how I turn ideas into reality? Here's a glimpse into my creative process: first, I brainstorm and imagine the possibilities, then I bring those ideas to life through thoughtful design, and finally, I use my technical expertise to build a polished end result that exceeds expectations.",
  },
];

export default function Story() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pageInfo.map((info) => (
              <span key={info.title} data-testid="title">
                {info.title}
              </span>
            ))}
          </h2>
          <p
            className="mt-2 text-lg leading-8 text-gray-600 py-8"
            data-testid="description"
          >
            {pageInfo.map((info) => (
              <span key={info.description}>{info.description}</span>
            ))}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {steps.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={post.href}>
                <div className="relative w-full filter grayscale hover:grayscale-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </Link>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <Link href={post.href}>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
