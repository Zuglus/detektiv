/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ContentPost from '../contentPost';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

// Mock getPosts
jest.mock('@/components/utility/getPosts', () => ({
  getPosts: jest.fn(() => Promise.resolve([
    {
      slug: 'test-post',
      title: 'Test Post',
      date: '2024-01-01',
      content: 'Test content',
    },
  ])),
}));

const mockPost = {
  slug: 'test-post',
  title: 'Test Post',
  date: '2024-01-01',
  content: 'Test content',
  previous: null,
  next: null,
};

describe('ContentPost', () => {
  it('should render post page structure', () => {
    render(
      <ContentPost post={mockPost} lang="ru" />);
    
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('should have proper semantic HTML structure', () => {
    const { container } = render(<ContentPost post={mockPost} lang="ru" />);
    
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('should include navigation links', () => {
    render(<ContentPost post={mockPost} lang="ru" />);
    
    expect(screen.getByText(/Все статьи/)).toBeInTheDocument();
  });
});