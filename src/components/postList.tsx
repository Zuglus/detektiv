'use client';

import { useState } from 'react';
import Button from './button';
import { Post } from './types';

export default function PostList({ posts, base, buttonName }: { posts: Post[], base: string, buttonName: string }) {
  const [baseList, setBaseList] = useState(0);
  const active =
    'px-3 py-2 leading-tight border border-neutral-700 bg-neutral-800 hover:bg-red-950 hover:text-red-700 z-10 text-red-600';
  const standard =
    'px-3 py-2 leading-tight text-neutral-500 bg-neutral-900 border border-neutral-600 hover:bg-neutral-900 hover:text-neutral-700';
  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 my-10'>
        {posts.map((post: Post, index: number) =>
          index >= baseList * 6 && index < baseList * 6 + 6 ? (
            <div
              key={post.title}
              className='group text-center py-10 shadow-md shadow-neutral-800'
            >
              <h3 className='text-2xl uppercase px-5'>{post.title}</h3>
              <div
                className='p-4 mb-7'
                dangerouslySetInnerHTML={{ __html: post.short }}
              />
              <Button name={buttonName} url={`${base}/${post.slug}`} />
            </div>
          ) : (
            ''
          )
        )}
      </div>
      <ul className='flex list-none items-center -space-x-px'>
        <li>
          <button
            onClick={() => setBaseList(baseList > 0 ? baseList - 1 : 0)}
            className=' rounded-l-lg block px-3 py-2 leading-tight text-neutral-500 bg-neutral-900 border border-neutral-600 hover:bg-neutral-900 hover:text-neutral-700'
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
          </button>
        </li>
        <li>
          <button
            className={baseList === 0 ? active : standard}
            onClick={() => setBaseList(0)}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={baseList === 1 ? active : standard}
            onClick={() => setBaseList(1)}
          >
            2
          </button>
        </li>
        <li>
          <button
            onClick={() => setBaseList(2)}
            aria-current='page'
            className={baseList === 2 ? active : standard}
          >
            3
          </button>
        </li>
        <li>
          <button
            onClick={() => setBaseList(3)}
            className={baseList === 3 ? active : standard}
          >
            4
          </button>
        </li>
        <li>
          <button
            onClick={() => setBaseList(4)}
            className={baseList === 4 ? active : standard}
          >
            5
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setBaseList(baseList < 4 ? baseList + 1 : 4);
            }}
            className='block px-3 py-2 leading-tight text-neutral-500 bg-neutral-900 border border-neutral-600 rounded-r-lg hover:bg-neutral-900 hover:text-neutral-700'
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
          </button>
        </li>
      </ul>
    </div>
  );
}
