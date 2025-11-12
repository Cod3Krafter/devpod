// Core Types for DevPod

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  body: any; // Portable Text content
  author: Author;
  categories?: Category[];
  publishedAt: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}
