/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ContentJob from '../contentJob';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('ContentJob', () => {
  it('should render job page with header', () => {
    render(<ContentJob lang="ru" />);
    
    expect(screen.getByText('помощник детектива')).toBeInTheDocument();
  });

  it('should display job requirements', () => {
    render(<ContentJob lang="ru" />);
    
    expect(screen.getByText('В резюме укажите следующие данные:')).toBeInTheDocument();
  });

  it('should display application process', () => {
    render(<ContentJob lang="ru" />);
    
    expect(screen.getByText('Ваше фото')).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const { container } = render(<ContentJob lang="ru" />);
    
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('should display contact email for applications', () => {
    render(<ContentJob lang="ru" />);
    
    expect(screen.getByText(/Резюме отправляйте на e-mail/)).toBeInTheDocument();
  });

  it('should render in english', () => {
    render(<ContentJob lang="en" />);
    
    expect(screen.getByText('detective assistant')).toBeInTheDocument();
  });
});