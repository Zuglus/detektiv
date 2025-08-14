import { ReactNode } from "react";

export type Route = {
  id: number;
  name: string;
  href: string;
};

export type Props = {
  children: ReactNode;
};

// (removed unused Service type)

export interface Post {
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  previous: string | null;  // Указывает на предыдущий пост или null
  next: string | null;      // Указывает на следующий пост или null
}

export interface Slugs {
  params: {
    slug: string;
  };
}

export type Breadcrumb = {
  home: string;
  name: string;
  link?: string;
  secondName?: string;
};

// (removed unused Contact/Contacts types)

// (removed unused Data, HeaderProps, ContentData types)

export type Lang = 'ru' | 'en';

export interface ContentLang {
  lang: Lang;
}

// (removed duplicate PostContentProps; local in post/contentPost)
