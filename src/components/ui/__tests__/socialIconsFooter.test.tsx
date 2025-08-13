// Mock the contacts data first so it applies without hoisting
jest.mock('@/data/contacts.json', () => ({
  phone: { name: 'Телефон', link: 'tel:+79161234567' },
  email: { name: 'Email', link: 'mailto:test@example.com' },
  telegram: { name: 'Telegram', link: 'https://t.me/test' },
  whatsapp: { name: 'WhatsApp', link: 'https://wa.me/79161234567' },
}));

import { render, screen } from '@testing-library/react';
import SocialIconsFooter from '../socialIconsFooter';

describe('SocialIconsFooter', () => {
  it('renders all social icons with proper alignment', () => {
    render(<SocialIconsFooter />);
    
    // Check navigation container exists
    const nav = screen.getByRole('navigation', { name: 'Ссылки для связи' });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('flex', 'items-center', 'justify-center');
    
    // Check all icons are rendered
    expect(screen.getByLabelText(/Связаться с нами через Телефон/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Связаться с нами через Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Связаться с нами через Telegram/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Связаться с нами через WhatsApp/)).toBeInTheDocument();
  });

  it('applies correct CSS classes for proper centering and hover effects', () => {
    render(<SocialIconsFooter />);
    
    const phoneLink = screen.getByLabelText(/Связаться с нами через Телефон/);
    
    // Check that the link has proper centering classes
    expect(phoneLink).toHaveClass('flex', 'items-center', 'justify-center');
    
    // Check that hover effects are properly defined
    expect(phoneLink).toHaveClass(
      'hover:scale-110',
      'hover:bg-primary-500/20',
      'hover:text-primary-900',
      'hover:shadow-lg'
    );
    
    // Check size and styling
    expect(phoneLink).toHaveClass('w-12', 'h-12', 'rounded-lg');
  });

  it('has proper external link attributes', () => {
    render(<SocialIconsFooter />);
    
    const telegramLink = screen.getByLabelText(/Связаться с нами через Telegram/);
    const whatsappLink = screen.getByLabelText(/Связаться с нами через WhatsApp/);
    
    // External links should have target="_blank" and rel="noopener noreferrer"
    expect(telegramLink).toHaveAttribute('target', '_blank');
    expect(telegramLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not have target="_blank" for tel: and mailto: links', () => {
    render(<SocialIconsFooter />);
    
    const phoneLink = screen.getByLabelText(/Связаться с нами через Телефон/);
    const emailLink = screen.getByLabelText(/Связаться с нами через Email/);
    
    // tel: and mailto: links should not have target="_blank"
    expect(phoneLink).not.toHaveAttribute('target');
    expect(emailLink).not.toHaveAttribute('target');
  });
});
