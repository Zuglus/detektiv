/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ContentBlog from '../contentBlog';

const mockPosts = [
  {
    slug: 'test-post',
    title: 'Test Post',
    date: '2024-01-01',
    excerpt: 'Test excerpt',
    content: 'Test content',
    shortDescription: 'Test short description',
  },
];

describe('ContentBlog', () => {
  it('should render blog page with header', () => {
    render(
      <ContentBlog 
        posts={mockPosts} 
        totalPages={1} 
        currentPage={1} 
        lang="ru" 
      />
    );
    
    expect(screen.getByText('Наши статьи')).toBeInTheDocument();
    expect(screen.getByText(/Реальные кейсы из практики/)).toBeInTheDocument();
  });

  it('should display blog posts grid', () => {
    render(
      <ContentBlog 
        posts={mockPosts} 
        totalPages={1} 
        currentPage={1} 
        lang="ru" 
      />
    );
    
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });

  it('should handle empty posts', () => {
    render(
      <ContentBlog 
        posts={[]} 
        totalPages={0} 
        currentPage={1} 
        lang="ru" 
      />
    );
    
    expect(screen.getByText('Статьи не найдены')).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const { container } = render(
      <ContentBlog 
        posts={mockPosts} 
        totalPages={1} 
        currentPage={1} 
        lang="ru" 
      />
    );
    
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});