// Sanity GROQ queries

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      image
    },
    categories[]->{
      _id,
      title,
      slug
    }
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      slug
    }
  }
`;

export const authorBySlugQuery = `
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    bio
  }
`;

export const postsByAuthorQuery = `
  *[_type == "post" && author._ref == $authorId] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]->{
      _id,
      title,
      slug
    }
  }
`;

export const relatedPostsQuery = `
  *[_type == "post" && slug.current != $slug && count((categories[]._ref)[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      image
    }
  }
`;
