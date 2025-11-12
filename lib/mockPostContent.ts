// Rich mock content for blog posts to showcase Portable Text rendering

export const nextjsContent = [
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Next.js 14 introduces significant improvements to the App Router, making it easier than ever to build performant, scalable web applications. In this comprehensive guide, we'll explore the key features and best practices for working with the latest version.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "What's New in Next.js 14" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "The App Router in Next.js 14 brings several game-changing features that revolutionize how we build React applications:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        marks: ["strong"],
        text: "Server Components by default: ",
      },
      { _type: "span", text: "Improved performance with less JavaScript" },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      { _type: "span", marks: ["strong"], text: "Streaming: " },
      {
        _type: "span",
        text: "Progressive rendering for faster initial page loads",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      { _type: "span", marks: ["strong"], text: "Partial Prerendering: " },
      {
        _type: "span",
        text: "Combine static and dynamic content seamlessly",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Server Components vs Client Components" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Understanding when to use Server Components versus Client Components is crucial. Here's a simple example:",
      },
    ],
  },
  {
    _type: "code",
    language: "typescript",
    code: `// Server Component (default)
export default async function BlogPost() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}

// Client Component
"use client";
export default function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Best Practices" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "To get the most out of Next.js 14, follow these best practices:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "number",
    children: [
      {
        _type: "span",
        text: "Use Server Components by default and only opt into Client Components when needed for interactivity",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "number",
    children: [
      {
        _type: "span",
        text: "Leverage data fetching directly in components for better code organization",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "number",
    children: [
      {
        _type: "span",
        text: "Implement proper loading and error states with loading.tsx and error.tsx files",
      },
    ],
  },
  {
    _type: "block",
    style: "blockquote",
    children: [
      {
        _type: "span",
        text: "The App Router represents a paradigm shift in how we think about React applications. Embrace the change and your apps will thank you!",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Conclusion" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Next.js 14 with the App Router is a powerful tool for building modern web applications. Start experimenting with these features today and see the difference in your application's performance and developer experience.",
      },
    ],
  },
];

export const typescriptContent = [
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "TypeScript continues to evolve with powerful features that make our code more robust and maintainable. Let's explore the best practices that every TypeScript developer should follow in 2024.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Use Strict Mode" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Always enable strict mode in your ",
      },
      { _type: "span", marks: ["code"], text: "tsconfig.json" },
      {
        _type: "span",
        text: " for maximum type safety:",
      },
    ],
  },
  {
    _type: "code",
    language: "json",
    code: `{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}`,
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Leverage Type Inference" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "TypeScript's type inference is powerful. Don't over-annotate when the compiler can figure it out:",
      },
    ],
  },
  {
    _type: "code",
    language: "typescript",
    code: `// Good - let TypeScript infer
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

// Unnecessary - over-annotated
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled: number[] = numbers.map((n: number): number => n * 2);`,
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Use Discriminated Unions" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Discriminated unions provide excellent type narrowing and make your code more maintainable:",
      },
    ],
  },
  {
    _type: "code",
    language: "typescript",
    code: `type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>) {
  if (result.success) {
    console.log(result.data); // TypeScript knows data exists
  } else {
    console.error(result.error); // TypeScript knows error exists
  }
}`,
  },
];

export const devopsContent = [
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "GitHub Actions has revolutionized CI/CD workflows, making it easier than ever to automate your development pipeline. In this guide, we'll build a complete CI/CD pipeline from scratch.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Setting Up Your Workflow" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Create a ",
      },
      { _type: "span", marks: ["code"], text: ".github/workflows/ci.yml" },
      { _type: "span", text: " file in your repository:" },
    ],
  },
  {
    _type: "code",
    language: "yaml",
    code: `name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build`,
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Key Benefits" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Using GitHub Actions provides several advantages:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      { _type: "span", text: "Native integration with GitHub repositories" },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [{ _type: "span", text: "Free for public repositories" }],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      { _type: "span", text: "Extensive marketplace of pre-built actions" },
    ],
  },
];

// Generic content for posts without custom content
const genericContent = [
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This is a comprehensive guide covering key concepts and best practices. We'll explore various techniques and strategies that will help you become more proficient in this area.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Key Concepts" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Understanding the fundamentals is crucial for mastering any technology. Let's dive into the core principles that form the foundation of this topic.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Best Practices" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Following industry best practices ensures your code is maintainable, scalable, and performs well in production environments.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Write clean, readable code that follows established conventions",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Test your code thoroughly to catch bugs early",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Document your work to help other developers understand your intentions",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text: "Conclusion" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "By applying these concepts and following best practices, you'll be well-equipped to build robust, efficient solutions. Keep learning and experimenting to further refine your skills.",
      },
    ],
  },
];

// Map post IDs to content
export const mockPostContentMap: Record<string, any[]> = {
  "post-1": nextjsContent,
  "post-2": typescriptContent,
  "post-3": devopsContent,
  "post-4": genericContent,
  "post-5": genericContent,
  "post-6": genericContent,
  "post-7": genericContent,
  "post-8": genericContent,
};
