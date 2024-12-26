import { DashboardLayout } from "@/components/layout/layout-body";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardLayout>
        <main
          style={{ height: 'calc(100vh - 151px)' }}
          className=" overflow-auto  "
        >
          {children}
        </main>
      </DashboardLayout>
    </div>
  );
};

export default layout;
