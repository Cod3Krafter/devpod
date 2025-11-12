import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      const imageUrl = getOptimizedImageUrl(value);
      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog post image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.alt && (
            <figcaption className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: any) => {
      return (
        <pre className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 dark:bg-zinc-950">
          <code className="text-sm text-zinc-100">{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="mb-6 mt-12 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mb-4 mt-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mb-3 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mb-3 mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-zinc-300 pl-6 italic text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-zinc-900 dark:text-zinc-50">
        {children}
      </strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="rounded bg-zinc-100 px-2 py-1 text-sm font-mono text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = value?.href?.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-zinc-900 underline decoration-zinc-400 underline-offset-2 transition-colors hover:decoration-zinc-600 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-zinc-700 dark:text-zinc-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-7">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-7">{children}</li>
    ),
  },
};

interface PortableTextContentProps {
  content: any;
}

export default function PortableTextContent({
  content,
}: PortableTextContentProps) {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}
