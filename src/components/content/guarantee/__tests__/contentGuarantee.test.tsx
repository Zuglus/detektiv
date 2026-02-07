/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ContentGuarantee from '../contentGuarantee';

describe('ContentGuarantee', () => {
  it('should render guarantee page with header', () => {
    render(<ContentGuarantee lang="ru" />);
    
    expect(screen.getByText('Наши гарантии и обязательства')).toBeInTheDocument();
  });

  it('should display guarantee principles', () => {
    render(<ContentGuarantee lang="ru" />);
    
    expect(screen.getByText('Наши принципы работы')).toBeInTheDocument();
  });

  it('should display money-back guarantee', () => {
    render(<ContentGuarantee lang="ru" />);
    
    expect(screen.getByText('Политика возврата средств')).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const { container } = render(<ContentGuarantee lang="ru" />);
    
    expect(container.firstElementChild).toBeInTheDocument();
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('should display contact information', () => {
    render(<ContentGuarantee lang="ru" />);
    
    expect(screen.getByText('Связаться с нами')).toBeInTheDocument();
  });

  it('should render in english', () => {
    render(<ContentGuarantee lang="en" />);
    
    expect(screen.getByText('Our Guarantees and Commitments')).toBeInTheDocument();
  });
});