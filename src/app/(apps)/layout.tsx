import { DashboardLayout } from "@/components/layout/layout-body";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardLayout>
        <main className="h-full bg-[#F5F6FA] flex flex-col">{children}</main>
      </DashboardLayout>
    </div>
  );
};

export default layout;
