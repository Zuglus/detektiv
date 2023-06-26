'use client';

import { useState } from 'react';
import Button from './button';

interface Post {
  slug: string;
  title: string;
  short: string;
  content: string;
  prev: string;
  next: string;
}

export default function PostList({ posts }: any) {
  const [baseList, setBaseList] = useState(3);
  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 my-10'>
        {posts.map((post: Post, index: number) =>
          index > baseList * 5 && index <= baseList * 5 + 5 ? (
            <div
              key={post.title}
              className='group text-center py-10 shadow-md shadow-neutral-800'
            >
              <h3 className='text-2xl uppercase px-5'>{post.title}</h3>
              <div
                className='p-4 mb-7'
                dangerouslySetInnerHTML={{ __html: post.short }}
              />
              <Button name='ПОДРОБНЕЕ' url={`stati/${post.slug}`} />
            </div>
          ) : (
            ''
          )
        )}
      </div>
      <ul className='flex list-none items-center -space-x-px'>
        <li>
          <a
            href='#'
            className='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <span className='sr-only'>Previous</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            1
          </a>
        </li>
        <li>
          <a
            href='#'
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            2
          </a>
        </li>
        <li>
          <a
            href='#'
            aria-current='page'
            className='z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
          >
            3
          </a>
        </li>
        <li>
          <a
            href='#'
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            4
          </a>
        </li>
        <li>
          <a
            href='#'
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            5
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <span className='sr-only'>Next</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
