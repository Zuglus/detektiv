import { Lang } from "@/lib/types";

export interface ServiceFeature {
  title: { [key in Lang]: string };
  price: { [key in Lang]: string };
  hourlyRate?: { [key in Lang]: string };
  description: { [key in Lang]: string };
  features: { [key in Lang]: string[] };
  popular: boolean;
}

export interface ServiceCategory {
  id: string;
  title: { [key in Lang]: string };
  description: { [key in Lang]: string };
  services: ServiceFeature[];
}

export interface TrustElements {
  title: { [key in Lang]: string };
  items: { [key in Lang]: string[] };
}

export interface ContentData {
  intro: {
    list: { [key in Lang]: string[] };
    text: { [key in Lang]: string };
  };
  trustElements: TrustElements;
  serviceCategories: ServiceCategory[];
  footer: {
    text: { [key in Lang]: string };
    propose: { [key in Lang]: string };
  };
}