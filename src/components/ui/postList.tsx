'use client';

import { useState } from 'react';
import Button from './button';
import { Post } from '@/components/utility/types'

export default function PostList({ posts, base, buttonName }: { posts: Post[], base: string, buttonName: string }) {
  const [baseList, setBaseList] = useState(0);
  
  const active =
    'px-4 py-2 leading-tight border border-[#2a4f4f] bg-[#50c878] text-white hover:bg-[#3a9f77] z-10';
  const standard =
    'px-4 py-2 leading-tight text-[#2a4f4f] bg-[#e8f5e9] border border-[#2a4f4f] hover:bg-[#c8e6c9] hover:text-[#2a4f4f]';

  return (
    <div className="flex flex-col items-center">
      {/* Posts Grid */}
      <div className="gap-x-6 gap-y-10 xl:gap-x-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10">
  {posts.map((post: Post, index: number) =>
    index >= baseList * 6 && index < baseList * 6 + 6 ? (
      <div
        key={post.title}
        className="relative border-[#a8d0b9] bg-white shadow-lg p-6 border rounded-lg transform transition-transform group hover:scale-105"
      >
        <h3 className="font-bold text-[#2a4f4f] text-2xl uppercase">{post.title}</h3>
        <div
          className="my-7 text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.short }}
        />
        <div className="right-5 bottom-4 absolute">
          <Button name={buttonName} url={`${base}/${post.slug}`} />
        </div>
      </div>
    ) : null
  )}
</div>


      {/* Pagination */}
      <ul className="flex items-center space-x-2 mt-6 list-none">
        <li>
          <button
            onClick={() => setBaseList(baseList > 0 ? baseList - 1 : 0)}
            className="border-[#2a4f4f] bg-[#e8f5e9] hover:bg-[#c8e6c9] px-3 py-2 border rounded-l-lg text-[#2a4f4f]"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <button
              className={baseList === i ? active : standard}
              onClick={() => setBaseList(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setBaseList(baseList < 4 ? baseList + 1 : 4)}
            className="border-[#2a4f4f] bg-[#e8f5e9] hover:bg-[#c8e6c9] px-3 py-2 border rounded-r-lg text-[#2a4f4f]"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
