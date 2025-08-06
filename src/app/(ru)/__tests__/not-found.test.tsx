/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import NotFound from '../not-found';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('NotFound Page', () => {
  it('should render 404 page with correct content', () => {
    render(<NotFound />);
    
    expect(screen.getByText('Ошибка 404. Материал не найден.')).toBeInTheDocument();
    expect(screen.getByText('Страница отсутствует! Проверьте адрес.')).toBeInTheDocument();
  });

  it('should have a link to home page', () => {
    render(<NotFound />);
    
    const homeLink = screen.getByRole('link', { name: 'Главная страница' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have proper semantic HTML structure', () => {
    const { container } = render(<NotFound />);
    
    expect(container.querySelector('h2')).toBeInTheDocument();
  });
});