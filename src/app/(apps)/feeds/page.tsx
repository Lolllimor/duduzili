'use client';
import { PostItem } from '@/lib/type';
import { Skeleton } from '@/components/ui/skeleton';
import { FeedCards } from '@/components/feeds/feed-cards';
import { CreatePost } from '@/components/feeds/create-post';
import PostContainer from '@/components/post/post-container';
import GeneralLayout from '@/components/layout/generalLayout';
import { TreandingTopics } from '@/components/feeds/trending-topics';
import { useFetchTrendingPostQuery } from '@/redux/features/feedApi';



const page = () => {
  const { data, isLoading } = useFetchTrendingPostQuery();
  return (
    <GeneralLayout pageTitle="Feeds"
      // moreOptions={<CreatePost />}
    >
      <div className="flex flex-col px-8 gap-8 pb-5 h-full overflow-auto">
        <FeedCards />
        <div className="flex  flex-col px-6 py-[19px] gap-10 shadow rounded-2xl h-full overflow-auto min-h-[505px]">
          <div className="flex flex-col gap-[21px]">
            <span className="text-[#101828] font-inter font-semibold">
              Trending
            </span>
            <hr />
          </div>
          <div className=" grid grid-cols-[1.5fr_1fr] gap-10  h-full overflow-auto">
            <div className="flex gap-8 flex-wrap  ">
              {isLoading ? (
                <div className="flex flex-col gap-5 rounded-xl border border-[#F0F0F1] w-full min-w-[505px] p-6 max-sm:px-1">
                  <div className=" flex gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex flex-col justify-between">
                      <Skeleton className="h-[18px] w-[258px] rounded-xl" />
                      <Skeleton className="h-[15px] w-[77px] rounded-xl" />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <Skeleton className="h-[15px] w-[550px] rounded-xl" />
                    <div className="flex gap-1 flex-wrap">
                      <Skeleton className="w-[301px] h-[148px] rounded-lg" />
                      <Skeleton className="w-[301px] h-[148px] rounded-lg" />
                      <Skeleton className="w-[301px] h-[148px] rounded-lg" />
                      <Skeleton className="w-[301px] h-[148px] rounded-lg" />
                    </div>
                  </div>
                </div>
              ) : (
                data?.data.results.map((item: PostItem, idx: number) => (
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
                ))
              )}
            </div>
            <TreandingTopics />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default page;
