interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
