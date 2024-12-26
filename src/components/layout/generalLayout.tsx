import React, { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { AppHeader } from '@/components/layout/appHeader';

function GenaralLayout({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string | Array<string>;
}) {
  return (
    <section className="flex items-start w-full h-screen">
      <Sidebar />
      <div className="flex-1">
        <AppHeader pageTitle={pageTitle} />
        {children}
      </div>
    </section>
  );
}

export default GenaralLayout;
