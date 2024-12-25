import { DashboardLayout } from "@/components/layout/layout-body";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardLayout>
        <main className="h-screen bg-[#F5F6FA]">{children}</main>
      </DashboardLayout>
    </div>
  );
};

export default layout;
