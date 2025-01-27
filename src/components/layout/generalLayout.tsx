import React, { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { AppHeader } from '@/components/layout/appHeader';

function GeneralLayout({
  children,
  pageTitle,
  moreOptions,
  className,
}: {
  children: ReactNode;
  pageTitle: string | Array<string>;
  moreOptions?: ReactNode;
  className?: string;
}) {
  return (
    <div className="h-full overflow-auto flex-1">
      <AppHeader pageTitle={pageTitle} moreOptions={moreOptions} />
      <main className={`${className} overflow-auto  `}>{children}</main>
    </div>
  );
}

export default GeneralLayout;
