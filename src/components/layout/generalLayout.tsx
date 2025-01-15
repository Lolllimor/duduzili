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
    <div className="flex-1 h-[100dvh] flex flex-col overflow-auto">
      <AppHeader pageTitle={pageTitle} moreOptions={moreOptions} />
      <main className={`${className} overflow-auto h-full flex `}>
        {children}
      </main>
    </div>
  );
}

export default GeneralLayout;
