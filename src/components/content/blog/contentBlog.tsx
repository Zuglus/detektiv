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
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Сетка постов */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {posts?.length > 0 ? (
          posts.map((post: Post) => (
            <div
              key={post.title}
              className="card group hover:scale-105 transition-all duration-300 relative pb-16"
            >
              <h3 className="text-heading-sm font-semibold text-secondary-900 mb-4 leading-tight">
                {post.title}
              </h3>
              <div
                className="text-body-md text-secondary-700 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: post.shortDescription }}
              />
              <div className="absolute bottom-6 right-6">
                <Button name={buttonName} url={`${base}/${post.slug}`} />
              </div>
            </div>
          ))
        ) : (
          <div className="card text-center col-span-full">
            <p className="text-body-lg text-secondary-600">Нет доступных постов.</p>
          </div>
        )}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          {/* Кнопка "Назад" */}
          {currentPage > 1 && (
            <Link
              href={`${base}/page/${currentPage - 1}`}
              className="btn-secondary"
            >
              {lang === 'ru' ? 'Назад' : 'Previous'}
            </Link>
          )}

          {/* Номера страниц */}
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`${base}/page/${i + 1}`}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === i + 1 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white text-secondary-700 border border-secondary-200 hover:bg-primary-50 hover:border-primary-300'
              }`}
            >
              {i + 1}
            </Link>
          ))}

          {/* Кнопка "Вперед" */}
          {currentPage < totalPages && (
            <Link
              href={`${base}/page/${currentPage + 1}`}
              className="btn-secondary"
            >
              {lang === 'ru' ? 'Вперед' : 'Next'}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
