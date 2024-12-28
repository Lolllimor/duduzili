import React, { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { AppHeader } from '@/components/layout/appHeader';

function GeneralLayout({
  children,
  pageTitle,
  moreOptions,
}: {
  children: ReactNode;
  pageTitle: string | Array<string>;
  moreOptions?: ReactNode;
}) {
  return (
    <section className="flex items-start w-full h-screen">
      <Sidebar />
      <div className="flex-1">
        <AppHeader pageTitle={pageTitle} moreOptions={moreOptions} />
        <main
          style={{ height: 'calc(100vh - 148px)' }}
          className=" overflow-auto  "
        >
          {children}
        </main>
      </div>
    </section>
  );
}

export default GeneralLayout;
