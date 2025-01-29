import GeneralLayout from "@/components/layout/generalLayout";
import { UserProfile } from "@/components/user-profile/profile";
import React from "react";

const page = () => {
  return (
    <GeneralLayout pageTitle="Users">
      <UserProfile />
    </GeneralLayout>
  );
};

export default page;
