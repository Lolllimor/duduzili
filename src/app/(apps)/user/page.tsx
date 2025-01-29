import GeneralLayout from "@/components/layout/generalLayout";
import { Users } from "@/components/user/page";
import React from "react";

const page = () => {
  return (
    <GeneralLayout pageTitle="Users">
      <Users />
    </GeneralLayout>
  );
};

export default page;
