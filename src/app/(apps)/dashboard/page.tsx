import { Dashboard } from "@/components/dashboard/page";

import React from "react";

import {
  paymentHistoryColumns,
  paymentHistoryData,
} from '@/components/user/user-table';
import { DataTablePagination } from '@/lib/paginatkon';

import { DataTable } from '@/lib/table-data';
import GeneralLayout from '@/components/layout/generalLayout';
const page = () => {
  return (
    <GeneralLayout pageTitle="Dashboard" >

      <></>
      <Dashboard />
    </GeneralLayout>
    // <DataTable
    //     columns={paymentHistoryColumns}
    //     data={paymentHistoryData ?? []}
    //   />
  );
};

export default page;
