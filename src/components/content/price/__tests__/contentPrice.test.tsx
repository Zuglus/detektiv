/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ContentPrice from '../contentPrice';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('ContentPrice', () => {
  it('should render price page with header', () => {
    render(<ContentPrice lang="ru" />);
    
    expect(screen.getByText('Прозрачные цены на детективные услуги')).toBeInTheDocument();
  });

  it('should display pricing tiers', () => {
    render(<ContentPrice lang="ru" />);
    
    expect(screen.getByText('Базовые услуги')).toBeInTheDocument();
    expect(screen.getByText('Наблюдение и безопасность')).toBeInTheDocument();
    expect(screen.getByText('Корпоративные расследования')).toBeInTheDocument();
  });

  it('should display pricing information', () => {
    render(<ContentPrice lang="ru" />);
    
    expect(screen.getAllByText(/от 50 000 ₽/)[0]).toBeInTheDocument();
  });

  it('should display service features', () => {
    render(<ContentPrice lang="ru" />);
    
    expect(screen.getByText('Базовые услуги')).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const { container } = render(<ContentPrice lang="ru" />);
    
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('should display contact CTA', () => {
    render(<ContentPrice lang="ru" />);
    
    expect(screen.getByText(/Для достижения профессионального результата/)).toBeInTheDocument();
  });

  it('should render in english', () => {
    render(<ContentPrice lang="en" />);
    
    expect(screen.getByText('Transparent Detective Service Pricing')).toBeInTheDocument();
  });
});