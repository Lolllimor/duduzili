'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import GeneralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import { CSColumn } from '@/components/access-management.tsx/cs-table-column';
import { useViewMembersQuery } from '@/redux/features/managementApi';
import { decrypt } from '@/lib/decrypt';

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';
  const { data } = useViewMembersQuery(id)
  console.log(data)

  useEffect(() => {
    if (!id) {
      router.replace('/management');
    }
  }, [id, router]);

  return (
    <GeneralLayout pageTitle={['Access Management', 'Customer Support']}>
      {data?.data.count ?
        (
        <div className="flex flex-col gap-6 px-6">
          <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
            <SearchIcon className="text-[#667085]" />
            <span className="text-[#667085]">Search group</span>
          </div>
          <div className="border rounded-lg h-full">
            <DataTable columns={CSColumn} data={data.data.results} />
          </div>
        </div>
      ) : (
        <EmptyState
          title=" Customer Support"
          paragraph="No admin added yet"
        />
        )
       }
    </GeneralLayout>
  );
}

export default Page;
