import { getPosts } from '@/components/utility/getPosts';
import ContentBlog from '@/components/content/blog/contentBlog';
import { Breadcrumb, Post } from '@/components/utility/types';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';

export default async function BlogPage({ params }: { params: { page: string } }) {
    const breadcrumb: Breadcrumb = {
        home: '/en',
        name: 'Blog',
        link: '',
        secondName: ''
      }
    const posts: Post[] = await getPosts('en');
    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const currentPage = parseInt(params.page, 10) || 1;

    // Проверка на существование страницы
    if (currentPage > totalPages || currentPage < 1) {
        return notFound();
    }

    const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <>
            <Breadcrumbs breadcrumb={breadcrumb} />
            <ContentBlog
                posts={paginatedPosts}
                totalPages={totalPages}
                currentPage={currentPage}
                lang="en"
            />
        </>
    );
}

// Генерация всех параметров для статической генерации страниц
export async function generateStaticParams() {
    const posts = await getPosts('en');
    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Генерация параметров для всех страниц
    const pages = Array.from({ length: totalPages }, (_, i) => ({
        page: (i + 1).toString(), // Здесь указываем номер страницы
    }));

    return pages;
}
