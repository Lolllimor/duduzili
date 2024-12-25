import {
  paymentHistoryColumns,
  paymentHistoryData,
} from "@/components/user/user-table";
import { DataTablePagination } from "@/lib/paginatkon";
import { DataTable } from "@/lib/table-data";
import React from "react";

const page = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut
      nostrum cupiditate repellendus explicabo velit dolorem laudantium corrupti
      nisi officiis, tenetur, adipisci enim, amet qui atque veniam quae totam?
      Enim? Maiores quo quasi perspiciatis sit inventore quis saepe, itaque, hic
      quos vero debitis. Minima quam exercitationem labore nesciunt beatae.
      Numquam eius quo est, iusto atque provident laboriosam quaerat laudantium
      minus.
      <DataTable
        columns={paymentHistoryColumns}
        data={paymentHistoryData ?? []}
      />
    </div>
  );
};

export default page;
