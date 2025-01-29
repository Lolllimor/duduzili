import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

export const DropDownMenu = () => {
  const { push } = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="!border !border-[#EAECF0] !rounded-[8px]"
      >
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => push("/user/info")}>
          View profile
        </DropdownMenuItem>
        <DropdownMenuItem>View on website</DropdownMenuItem>
        <DropdownMenuItem className="text-[#B42318]">
          Deactive account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
