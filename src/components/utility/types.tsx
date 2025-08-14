import { ReactNode } from "react";

export type Route = {
  id: number;
  name: string;
  href: string;
};

export type Props = {
  children: ReactNode;
};


export interface Post {
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  previous: string | null;
  next: string | null;
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

// Shared app types used across components

export type Lang = 'ru' | 'en';

export interface ContentLang {
  lang: Lang;
}
