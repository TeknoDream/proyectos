import BkPortada from "@/assets/img/portada.jpg";

export type MainCategory = string;
export type SubCategory = string;

export interface Product {
  name: string;
  format: string;
  finish: string;
  collection: string;
  origin: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  country: string;
  mainCategory: MainCategory;
  mainCategoryLabel?: string;
  subCategory: SubCategory;
  subCategoryLabel?: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
  products: Product[];
  architect?: string;
  description: string;
  gallery?: string[];
  whatsappUrl?: string;
}

export { BkPortada };
