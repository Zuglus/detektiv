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

export type Route = {
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

interface Contact {
  name: string;
  link: string;
  directName?: string;
}

export interface Contacts {
  telegram: Contact;
  whatsapp: Contact;
  email: Contact;
  phone: Contact;
  site: string;
}

interface Data {
  subheader: string;
  intro: string;
  proposeHeader: string;
  proposeText: string;
  serviceList: Card[];
  orderListHeader: string;
  orderList: string[];
  benefitsList: Benefit[];
  detektivePrinciplesHeader: string;
  detektivePrinciplesList: Principle[];
  alertHeader: string;
  alertText: string;
  alertSubstring1: string;
  alertSubstring2: string;
  alertSubstring3: string;
}

interface ContentAboutProps {
  data: Data;
  contacts: Contacts;
}

export interface HeaderProps {
  data: {
    intro: string;
    header: string;
    headerName?: string;
    div1: string;
    div2: string;
  };
  routes: Route[];
}

export interface ContentData {
  ru: Data;
  en: Data;
}

export type Lang = 'ru' | 'en';