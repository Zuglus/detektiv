import { ReactNode } from "react";

export type Card = {
  title: string;
  price: string;
  text: string;
};

export type Benefit = {
  id: number;
  title: string;
  text: string;
};

export type Principle = {
  title: string;
  text: string;
};

export type Rout = {
  id: number;
  name: string;
  href: string;
}

export type Props = {
  children: ReactNode;
};

export type Service = {
  title: string;
  price: string;
  text: string;
}

export interface Post {
  id: number
  slug: string;
  title: string;
  short: string;
  content: string;
  prev: string;
  next: string;
}

export interface Slugs {
  params: {
    slug: string;
  };
}

export type Breadcrumb = {
  home: string;
  name: string;
  link: string;
  secondName: string;
}
