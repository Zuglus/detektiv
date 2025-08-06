/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ContentContact from '../contentContact';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('ContentContact', () => {
  it('should render without crashing', () => {
    render(<ContentContact />);
  });

  it('should display contact information', () => {
    render(<ContentContact />);
    
    // Check for actual content rendered by the component
    expect(screen.getByText('+7 (915) 001-00-25')).toBeInTheDocument();
    expect(screen.getByText('detectivegroznyi@gmail.com')).toBeInTheDocument();
  });

  it('should have contact links', () => {
    render(<ContentContact />);
    
    expect(screen.getByLabelText('Позвонить по экстренному номеру +7 (915) 001-00-25')).toBeInTheDocument();
    expect(screen.getByLabelText('Отправить email на detectivegroznyi@gmail.com')).toBeInTheDocument();
    expect(screen.getByLabelText('Связаться через Telegram')).toBeInTheDocument();
    expect(screen.getByLabelText('Связаться через WhatsApp')).toBeInTheDocument();
  });

  it('should have proper structure', () => {
    render(<ContentContact />);
    
    // Check for basic structure elements
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});