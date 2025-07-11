import { getPosts } from '@/components/utility/getPosts';
import ContentBlog from '@/components/content/blog/contentBlog';
import { Breadcrumb, Post } from '@/components/utility/types';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';

export default async function BlogPage() {
    const breadcrumb: Breadcrumb = {
        home: '/',
        name: 'Статьи',
        link: '',
        secondName: ''
    }
    const posts: Post[] = await getPosts('ru');
    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const currentPage = 1;

    const paginatedPosts = posts.slice(0, postsPerPage);

    return (
        <>
            <Breadcrumbs breadcrumb={breadcrumb} />
            <ContentBlog
                posts={paginatedPosts}
                totalPages={totalPages}
                currentPage={currentPage}
                lang="ru"
            />
        </>
    );
}
