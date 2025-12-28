import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 ${
        hover ? 'transition-all hover:shadow-lg hover:border-primary-500 dark:hover:border-primary-500' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
