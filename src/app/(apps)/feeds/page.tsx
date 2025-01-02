'use client';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import { CreatePost } from '@/components/feeds/create-post';
import GenaralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { FeedCards } from '@/components/feeds/feed-cards';

const page = () => {
  return (
    <GenaralLayout pageTitle="Feeds" moreOptions={<CreatePost />}>
      <div className='px-8'>
        
      <FeedCards />
</div>
    </GenaralLayout>
  );
};

export default page;
