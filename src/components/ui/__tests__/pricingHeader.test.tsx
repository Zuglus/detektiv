import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PricingHeader from '../pricingHeader';

describe('PricingHeader', () => {
  const mockIntroList = {
    ru: [
      'Детальная консультация',
      'Понятные условия',
      'Гарантия результата'
    ],
    en: [
      'Detailed consultation',
      'Clear terms',
      'Result guarantee'
    ],
  };

  describe('rendering', () => {
    it('renders without crashing for Russian language', () => {
      render(<PricingHeader lang="ru" introList={mockIntroList} />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('renders without crashing for English language', () => {
      render(<PricingHeader lang="en" introList={mockIntroList} />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('displays heading in Russian', () => {
      render(<PricingHeader lang="ru" introList={mockIntroList} />);
      expect(screen.getByText('Прозрачные цены на детективные услуги')).toBeInTheDocument();
    });

    it('displays heading in English', () => {
      render(<PricingHeader lang="en" introList={mockIntroList} />);
      expect(screen.getByText('Transparent Detective Service Pricing')).toBeInTheDocument();
    });
  });

  describe('intro list items', () => {
    it('renders all intro items for Russian', () => {
      render(<PricingHeader lang="ru" introList={mockIntroList} />);
      expect(screen.getByText('Детальная консультация')).toBeInTheDocument();
      expect(screen.getByText('Понятные условия')).toBeInTheDocument();
      expect(screen.getByText('Гарантия результата')).toBeInTheDocument();
    });

    it('renders all intro items for English', () => {
      render(<PricingHeader lang="en" introList={mockIntroList} />);
      expect(screen.getByText('Detailed consultation')).toBeInTheDocument();
      expect(screen.getByText('Clear terms')).toBeInTheDocument();
      expect(screen.getByText('Result guarantee')).toBeInTheDocument();
    });

    it('renders numbered badges for each item', () => {
      render(<PricingHeader lang="ru" introList={mockIntroList} />);
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('renders correct number of items', () => {
      const { container } = render(<PricingHeader lang="ru" introList={mockIntroList} />);
      const items = container.querySelectorAll('.space-y-3');
      expect(items).toHaveLength(3);
    });
  });

  describe('styling', () => {
    it('has gradient card styling with UnifiedCard', () => {
      const { container } = render(<PricingHeader lang="ru" introList={mockIntroList} />);
      // UnifiedCard adds these Tailwind classes directly
      const cardElement = container.querySelector('.bg-gradient-to-br');

      expect(cardElement).toBeInTheDocument();
      expect(cardElement).toHaveClass('bg-gradient-to-br');
      expect(cardElement).toHaveClass('from-primary-600');
      expect(cardElement).toHaveClass('to-primary-700');
      expect(cardElement).toHaveClass('text-white');
      expect(cardElement).toHaveClass('border-primary-500');
    });

    it('has responsive grid layout', () => {
      const { container } = render(<PricingHeader lang="ru" introList={mockIntroList} />);
      const grid = container.querySelector('.grid');

      expect(grid).toBeInTheDocument();
      expect(grid).toHaveClass('md:grid-cols-3');
      expect(grid).toHaveClass('gap-6');
    });

    it('heading has proper styling classes', () => {
      render(<PricingHeader lang="ru" introList={mockIntroList} />);
      const heading = screen.getByRole('heading');

      expect(heading).toHaveClass('text-display-md');
      expect(heading).toHaveClass('font-display');
      expect(heading).toHaveClass('font-bold');
      expect(heading).toHaveClass('mb-6');
    });

    it('badge circles have proper styling', () => {
      const { container } = render(<PricingHeader lang="ru" introList={mockIntroList} />);
      const badges = container.querySelectorAll('.w-12.h-12');

      expect(badges).toHaveLength(3);
      badges.forEach(badge => {
        expect(badge).toHaveClass('mx-auto');
        expect(badge).toHaveClass('bg-white/20');
        expect(badge).toHaveClass('rounded-full');
        expect(badge).toHaveClass('flex');
        expect(badge).toHaveClass('items-center');
        expect(badge).toHaveClass('justify-center');
      });
    });
  });

  describe('edge cases', () => {
    it('handles empty intro list', () => {
      const emptyIntroList = { ru: [], en: [] };
      const { container } = render(<PricingHeader lang="ru" introList={emptyIntroList} />);
      const items = container.querySelectorAll('.space-y-3');
      expect(items).toHaveLength(0);
    });

    it('handles single item in intro list', () => {
      const singleItemList = {
        ru: ['Единственный пункт'],
        en: ['Single item']
      };
      render(<PricingHeader lang="ru" introList={singleItemList} />);
      expect(screen.getByText('Единственный пункт')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('handles many items in intro list', () => {
      const manyItemsList = {
        ru: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
        en: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
      };
      const { container } = render(<PricingHeader lang="ru" introList={manyItemsList} />);
      const items = container.querySelectorAll('.space-y-3');
      expect(items).toHaveLength(5);
    });
  });
});
