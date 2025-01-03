'use client';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import { CreatePost } from '@/components/feeds/create-post';
import GenaralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { FeedCards } from '@/components/feeds/feed-cards';
import PostContainer from '@/components/post/post-container';
import { useFetchTrendingPostQuery } from '@/redux/features/feedApi';
import { TreandingTopics } from '@/components/feeds/trending-topics';

type PostItem = {
  mentions: string[];
  post_id: string;
  owner_details: {
    profile_picture: string;
    username: string;
    full_name: string;
  };
  content: string;
  is_liked: boolean;
  media: {
    audio: string[];
    video: string[];
    picture: string[];
  };

  community_details: {
    community_name: string;
    community_cover_photo: string;
  };
  is_edited: boolean;
  liked_by: {
    liked_by: string;
    profile_picture: string[];
  };
  the_likes_count: number;
  created: Date;
  is_favorite: boolean;
  is_following: boolean;
  comments_count: number;
};

const page = () => {
  const { data } = useFetchTrendingPostQuery();

  return (
    <GenaralLayout pageTitle="Feeds" moreOptions={<CreatePost />}>
      <div className="flex flex-col px-8 gap-8">
        <FeedCards />
        <div className="flex  flex-col px-6 py-[19px] gap-10 shadow rounded-2xl">
          <div className="flex flex-col gap-[21px]">
            <span className="text-[#101828] font-inter font-semibold">
              Trending
            </span>
            <hr />
          </div>
          <div className=" grid grid-cols-[1.5fr_1fr] gap-10">
            <div className="flex gap-8 flex-wrap">
                {data?.data.results.map((item: PostItem, idx: number) => (
                <PostContainer
                  key={idx}
                  id={idx === 0 ? 'top' : undefined}
                  mentions={item?.mentions}
                  onLikeClick={() => {}}
                  postId={item?.post_id}
                  communityDetails={item?.community_details}
                  poster={item?.owner_details}
                  content={item?.content}
                  isLiked={item?.is_liked}
                  media={[
                  ...(item?.media?.audio?.length
                    ? item?.media?.audio?.map((el: string) => ({
                      type: 'audio' as const,
                      url: el,
                    }))
                    : []),
                  ...(item?.media?.video?.length
                    ? item?.media?.video?.map((el: string) => ({
                      type: 'video' as const,
                      url: el,
                    }))
                    : []),
                  ...(item?.media?.picture?.length
                    ? item?.media?.picture?.map((el: string) => ({
                      type: 'photo' as const,
                      url: el,
                    }))
                    : []),
                  ]}
                  isCommunityPost={!!item?.community_details?.community_name}
                  isEdited={item?.is_edited}
                  likeBy={item?.liked_by?.liked_by}
                  remainingLikesCount={item?.the_likes_count}
                  likesPictures={item?.liked_by?.profile_picture}
                  date={item?.created}
                  isFavourite={item?.is_favorite}
                  isFollowing={item?.is_following}
                  commentsCount={item?.comments_count}
                  likesCount={item?.the_likes_count}
                />
                ))}
            </div>
            <TreandingTopics />
          </div>
        </div>
      </div>
    </GenaralLayout>
  );
};

export default page;
