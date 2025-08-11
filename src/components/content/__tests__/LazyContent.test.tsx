/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import {
  LazyAbout,
  LazyBlog,
  LazyContact,
  LazyGuarantee,
  LazyJob,
  LazyPrice,
} from '../LazyContent';

// Mock the lazy-loaded components
jest.mock('../about/contentAbout', () => ({
  __esModule: true,
  default: ({ lang }: { lang: string }) => <div data-testid="lazy-about">About Content {lang}</div>,
}));

jest.mock('../blog/contentBlog', () => ({
  __esModule: true,
  default: (
    props: {
      lang: string;
      posts: unknown[];
      totalPages: number;
      currentPage: number;
    },
  ) => <div data-testid="lazy-blog">Blog Content {props.lang}</div>,
}));

jest.mock('../contact/contentContact', () => ({
  __esModule: true,
  default: ({ lang }: { lang: string }) => <div data-testid="lazy-contact">Contact Content {lang}</div>,
}));

jest.mock('../guarantee/contentGuarantee', () => ({
  __esModule: true,
  default: ({ lang }: { lang: string }) => <div data-testid="lazy-guarantee">Guarantee Content {lang}</div>,
}));

jest.mock('../job/contentJob', () => ({
  __esModule: true,
  default: ({ lang }: { lang: string }) => <div data-testid="lazy-job">Job Content {lang}</div>,
}));

jest.mock('../price/contentPrice', () => ({
  __esModule: true,
  default: ({ lang }: { lang: string }) => <div data-testid="lazy-price">Price Content {lang}</div>,
}));

// Mock LazyComponent to render immediately for testing
jest.mock('@/components/ui/LazyComponent', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => children,
}));

describe('LazyContent Components', () => {
  describe('LazyAbout', () => {
    it('should render about content', async () => {
      render(<LazyAbout lang="ru" />);
      await waitFor(() => {
        expect(screen.getByTestId('lazy-about')).toBeInTheDocument();
      });
    });
  });

  describe('LazyBlog', () => {
    it('should render blog content', async () => {
      render(<LazyBlog lang="ru" posts={[]} totalPages={0} currentPage={1} />);
      await waitFor(() => {
        expect(screen.getByTestId('lazy-blog')).toBeInTheDocument();
      });
    });
  });

  describe('LazyContact', () => {
    it('should render contact content', async () => {
      render(<LazyContact lang="ru" />);
      await waitFor(() => {
        expect(screen.getByTestId('lazy-contact')).toBeInTheDocument();
      });
    });
  });

  describe('LazyGuarantee', () => {
    it('should render guarantee content', async () => {
      render(<LazyGuarantee lang="ru" />);
      await waitFor(() => {
        expect(screen.getByTestId('lazy-guarantee')).toBeInTheDocument();
      });
    });
  });

  describe('LazyJob', () => {
    it('should render job content', async () => {
      render(<LazyJob lang="ru" />);
      await waitFor(() => {
        expect(screen.getByTestId('lazy-job')).toBeInTheDocument();
      });
    });
  });

  describe('LazyPrice', () => {
    it('should render price content', async () => {
      render(<LazyPrice lang="ru" />);
      await waitFor(() => {
        expect(screen.getByTestId('lazy-price')).toBeInTheDocument();
      });
    });
  });
});