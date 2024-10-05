import Link from 'next/link';
import Button from '@/components/ui/button';
import { Lang, Post } from '@/components/utility/types';

interface ContentBlogProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  lang: Lang;
}

export default function ContentBlog({ posts, totalPages, currentPage, lang }: ContentBlogProps) {
  const base = lang === 'ru' ? '/stati' : '/en/blog';
  const buttonName = lang === 'ru' ? 'Читать далее' : 'Read more';

  return (
    <div className="flex flex-col items-center">
      {/* Сетка постов */}
      <div className="gap-x-6 gap-y-10 xl:gap-x-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10">
        {posts?.length > 0 ? (
          posts.map((post: Post) => (
            <div
              key={post.title}
              className="relative border-[#a8d0b9] bg-white shadow-lg p-6 border rounded-lg transform transition-transform group hover:scale-105"
            >
              <h3 className="font-bold text-[#2a4f4f] text-2xl uppercase">{post.title}</h3>
              <div
                className="my-7 text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.shortDescription }}
              />
              <div className="right-5 bottom-4 absolute">
                <Button name={buttonName} url={`${base}/${post.slug}`} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Нет доступных постов.</p>
        )}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <ul className="flex items-center space-x-2 mt-6 list-none">
          {/* Кнопка "Назад" */}
          {currentPage > 1 && (
            <li>
              <Link
                href={`${base}/page/${currentPage - 1}`}
                className="border-[#2a4f4f] bg-[#e8f5e9] hover:bg-[#c8e6c9] px-4 py-2 border text-[#2a4f4f] hover:text-[#2a4f4f] leading-tight"
              >
                Назад
              </Link>
            </li>
          )}

          {/* Номера страниц */}
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <Link
                href={`${base}/page/${i + 1}`}
                className={`px-4 py-2 leading-tight border border-[#2a4f4f] ${
                  currentPage === i + 1 ? 'bg-[#50c878] text-white' : 'bg-[#e8f5e9] text-[#2a4f4f] hover:bg-[#c8e6c9] hover:text-[#2a4f4f]'
                }`}
              >
                {i + 1}
              </Link>
            </li>
          ))}

          {/* Кнопка "Вперед" */}
          {currentPage < totalPages && (
            <li>
              <Link
                href={`${base}/page/${currentPage + 1}`}
                className="border-[#2a4f4f] bg-[#e8f5e9] hover:bg-[#c8e6c9] px-4 py-2 border text-[#2a4f4f] hover:text-[#2a4f4f] leading-tight"
              >
                Вперед
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
