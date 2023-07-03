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
