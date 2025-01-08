import { PostItem } from '@/lib/type';
import { Skeleton } from '../ui/skeleton';
import PostContainer from '../post/post-container';
import { useFetchCommunityPostQuery } from '@/redux/features/communityApi';
import { EmptyState } from '../settings/empty-state';

export const CommunityPost = ({ id }: { id: string }) => {
  const { data, isLoading } = useFetchCommunityPostQuery({ id });
  console.log(data);
  return (
    <div className="flex gap-2 flex-wrap overflow-auto h-full">
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
      ) : data.data.count ? (
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
      ) : (
        <div className="flex flex-col gap-5 rounded-xl border border-[#F0F0F1] bg-white flex-1 w-full min-w-[505px] p-6 max-sm:px-1">
          <EmptyState title="Post" paragraph="No post has been made" />
        </div>
      )}
    </div>
  );
};
