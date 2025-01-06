import { Heart, Send2, Save2, Message } from 'iconsax-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
// import { Avatar, AvatarGroup } from "@mantine/core";

import { CSSProperties, useContext, useEffect, useState } from 'react';
// import { builder } from "@/src/api/builder";
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import PostHeader from './post-header';
import VideoContainer from './video-container';
import ImagePostContainer from './image-post-container';
import AudioPlayer from './audio-player';
import LinkPreview from './link-preview';
import CommunityPostHeader from './community-post-header';
import PostContentWrapper from './post-content-wrapper';
import { PostOwnerDetails, PostResponseCommunityDetails } from '@/lib/type';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export interface PostContainerProps {
  style?: CSSProperties;
  id?: string;
  mentions?: string[];
  content?: string;
  isEdited?: boolean;
  date?: Date;
  isCommunityPost?: boolean;
  commentsCount?: number;
  likesCount?: number;
  isFavourite?: boolean;
  isFollowing?: boolean;
  isLiked?: boolean;
  likeBy?: string;
  parentCommentId?: string;
  remainingLikesCount?: number;
  likesPictures?: string[];
  poster?: PostOwnerDetails;
  commentId?: string;
  hideMenu?: boolean;
  communityDetails?: any;
  tags?: any[];
  media?: {
    type: 'video' | 'audio' | 'photo';
    url: StaticImageData | string;
  }[];
  postId?: string;
  isComment?: boolean;
  onLikeClick?: () => void;
}

function replaceWithTagSpan(inputString: string) {
  // Regular expression to match tags
  const regex = /(#\w+)/g;
  const atRegex = /(@\w+)/g;

  // Replace tags with span elements
  const replacedString = inputString
    .replace(
      regex,
      (word) =>
        `<a href="/search/posts/topics?q=${word.replace(
          '#',
          ''
        )}" class="text-duduzili-violet-100 tag hover:underline"><span>${word}</span></a>`
    )
    .replace(
      atRegex,
      (word) =>
        `<a class="text-duduzili-violet-100 tag hover:underline" href="/${word.replace(
          '@',
          ''
        )}"><span>${word}</span></a>`
    );

  return replacedString;
}

function PostContainer(props?: PostContainerProps) {
  const [isSaved, setIsSaved] = useState(false);
  const pathname = usePathname();

  const joinChannel = () => {};
  const joinForYouChannel = () => {};

  const [postLiked, setPostLiked] = useState(false);
  const [postLikeCount, setPostLikeCount] = useState(0);

  useEffect(() => {
    if (props?.isLiked !== undefined) {
      setPostLiked(props.isLiked);
    }
  }, [props?.isLiked]);

  useEffect(() => {
    if (props?.likesCount !== undefined) {
      setPostLikeCount(props.likesCount);
    }
  }, [props?.likesCount]);

  useEffect(() => {
    if (props?.isFavourite !== undefined) {
      setIsSaved(props.isFavourite);
    }
  }, [props?.isFavourite]);

  const queryClient = useQueryClient();
  const saveOrRemoveFromFavourites = (post_id: string) => {};
  return (
    <div
      style={props?.style}
      id={props?.id}
      className="p-6 max-sm:px-1 bg-white flex flex-col gap-5 rounded-xl border border-[#F0F0F1] w-full min-w-[505px]"
    >
      <div className="flex flex-col gap-4">
        {props?.isCommunityPost ? (
          <CommunityPostHeader {...props} />
        ) : (
          <PostHeader {...props} />
        )}
        <section className="flex flex-col gap-4">
          <PostContentWrapper {...props}>
            <Markdown
              rehypePlugins={[rehypeRaw]}
              disallowedElements={['script']}
              remarkPlugins={[remarkGfm]}
            >
              {props?.content &&
              props?.content?.length > 200 &&
              (props?.isComment
                ? !pathname.includes(props?.commentId as string)
                : !pathname.includes(props?.postId as string))
                ? replaceWithTagSpan(props?.content?.slice(0, 200))
                : replaceWithTagSpan(props?.content as string)}
            </Markdown>
            {props?.content &&
            props.content.length > 200 &&
            (props?.isComment
              ? !pathname.includes(props?.commentId as string)
              : !pathname.includes(props?.postId as string)) ? (
              <>
                <span className="text-duduzili-violet-100 text-semibold-16">
                  see more
                </span>
              </>
            ) : null}
          </PostContentWrapper>
          <LinkPreview text={props?.content ?? ''} />
          {props?.media?.length === 1 ? (
            props?.media?.[0]?.type === 'video' ? (
              <VideoContainer
                className="!h-[300px] max-sm:!h-[150px] cursor-pointer"
                url={props?.media?.[0]?.url as string}
                name={props?.poster?.full_name as string}
                file={props?.media?.[0]?.url as string}
                postDetails={props}
              />
            ) : props?.media?.[0]?.type === 'photo' ? (
              <ImagePostContainer
                className="!h-[300px] max-sm:!h-[150px] cursor-pointer"
                name={props?.poster?.full_name as string}
                file={props?.media?.[0]?.url as string}
                postDetails={props}
                url={props?.media?.[0]?.url as string}
              />
            ) : (
              <AudioPlayer url={props?.media?.[0]?.url as string} />
            )
          ) : props?.media?.length === 2 ? (
            <div className="grid grid-cols-2 gap-2">
              {props?.media?.map((item, idx, arr) =>
                item?.type === 'video' ? (
                  <VideoContainer
                    className="!h-[300px] max-sm:!h-[150px] cursor-pointer"
                    key={idx}
                    url={item?.url as string}
                    name={props?.poster?.full_name as string}
                    files={arr.map((item) => item?.url as string)}
                    currentIndex={idx}
                    postDetails={props}
                  />
                ) : item?.type === 'photo' ? (
                  <ImagePostContainer
                    className="!h-[300px] max-sm:!h-[150px] cursor-pointer"
                    key={idx}
                    name={props?.poster?.full_name as string}
                    files={arr.map((item) => item?.url as string)}
                    currentIndex={idx}
                    postDetails={props}
                    url={item?.url as string}
                  />
                ) : (
                  <AudioPlayer url={item?.url as string} key={idx} />
                )
              )}
            </div>
          ) : props?.media?.length === 3 ? (
            <div className="flex gap-2 h-[300px] max-sm:h-[150px]">
              <div className="cursor-pointer flex-1">
                {props?.media?.[0]?.type === 'video' ? (
                  <VideoContainer
                    className="!h-full max-sm:!h-full"
                    url={props?.media?.[0]?.url as string}
                    name={props?.poster?.full_name as string}
                    files={props?.media.reduce((acc, item) => {
                      if (item?.type === 'photo') acc.push(item.url as string);
                      return acc;
                    }, [] as string[])}
                    currentIndex={0}
                    postDetails={props}
                  />
                ) : props?.media?.[0]?.type === 'photo' ? (
                  <ImagePostContainer
                    className="!h-full max-sm:!h-full"
                    name={props?.poster?.full_name as string}
                    files={props?.media.reduce((acc, item) => {
                      if (item?.type === 'photo') acc.push(item.url as string);
                      return acc;
                    }, [] as string[])}
                    currentIndex={0}
                    postDetails={props}
                    url={props?.media?.[0]?.url as string}
                  />
                ) : (
                  <AudioPlayer url={props?.media?.[0]?.url as string} />
                )}
              </div>
              <div className="grid flex-1 grid-rows-2 gap-2">
                {props?.media?.map(
                  (item, idx, arr) =>
                    idx !== 0 &&
                    (item?.type === 'video' ? (
                      <VideoContainer
                        className="!h-full max-sm:!h-full cursor-pointer"
                        key={idx}
                        url={item?.url as string}
                        name={props?.poster?.full_name as string}
                        files={arr.map((item) => item?.url as string)}
                        currentIndex={idx}
                        postDetails={props}
                      />
                    ) : item?.type === 'photo' ? (
                      <div key={idx} className="h-full">
                        <ImagePostContainer
                          className="!h-full max-sm:!h-full cursor-pointer"
                          key={idx}
                          noHeight
                          name={props?.poster?.full_name as string}
                          files={arr.map((item) => item?.url as string)}
                          currentIndex={idx}
                          postDetails={props}
                          url={item?.url as string}
                        />
                      </div>
                    ) : (
                      <AudioPlayer url={item?.url as string} key={idx} />
                    ))
                )}
              </div>
            </div>
          ) : props?.media?.length === 4 ? (
            <div className="grid grid-cols-2 h-full gap-2">
              {props?.media?.map((item, idx, arr) =>
                item?.type === 'video' ? (
                  <VideoContainer
                    className="!h-[150px] max-sm:!h-[75px] cursor-pointer"
                    key={idx}
                    name={props?.poster?.full_name as string}
                    files={arr.map((item) => item?.url as string)}
                    currentIndex={idx}
                    url={item?.url as string}
                    postDetails={props}
                  />
                ) : item?.type === 'photo' ? (
                  <div key={idx} className="h-full">
                    <ImagePostContainer
                      className="!h-[150px] max-sm:!h-[75px] cursor-pointer"
                      key={idx}
                      name={props?.poster?.full_name as string}
                      files={arr.map((item) => item?.url as string)}
                      currentIndex={idx}
                      url={item?.url as string}
                      postDetails={props}
                    />
                  </div>
                ) : (
                  <AudioPlayer url={item?.url as string} key={idx} />
                )
              )}
            </div>
          ) : null}
          <p className="flex gap-2">
            {props?.tags?.map((item, idx) => (
              <span
                key={idx}
                className="text-regular-14 text-duduzili-violet-100"
              >
                #{item}
              </span>
            ))}
          </p>
        </section>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-[clamp(16px,3.3vh,48px)]">
            <span
              onClick={() => {
                setPostLiked(!postLiked);
                if (postLiked) {
                  setPostLikeCount((p) => (p ? p - 1 : p));
                } else setPostLikeCount((p) => p + 1);
                props?.onLikeClick?.();
              }}
              className="flex items-center cursor-pointer gap-2"
            >
              <Heart
                size={18}
                variant={postLiked ? 'Bold' : 'Outline'}
                color={postLiked ? '#DC2626' : '#494850'}
              />
              <span
                className={clsx(
                  postLiked ? 'text-[#DC2626]' : 'text-duduzili-neutral-800',
                  'text-regular-14'
                )}
              >
                {postLikeCount}{' '}
                {postLikeCount && postLikeCount < 2 ? 'like' : 'likes'}
              </span>
            </span>
            <Link
              href={
                props?.isComment
                  ? `/comment/${props?.postId}/${props?.poster?.username}/${props?.commentId}`
                  : `/posts/${props?.poster?.username}/${props?.postId}`
              }
              className="flex items-center gap-2"
            >
              <Message size={18} color="#494850" />
              <span className="text-regular-14 text-duduzili-neutral-800">
                {props?.commentsCount}{' '}
                {props?.commentsCount && props?.commentsCount < 2
                  ? 'comment'
                  : 'comments'}
              </span>
            </Link>
            <span className="flex items-center gap-2">
              <Send2 size={18} color="#494850" />
              <span className="text-regular-14 text-duduzili-neutral-800">
                Share
              </span>
            </span>
          </div>
          {props?.isComment ? null : (
            <Save2
              size={18}
              className="cursor-pointer"
              color={isSaved ? '#4534B8' : '#494850'}
              variant={isSaved ? 'Bold' : 'Outline'}
              onClick={() =>
                saveOrRemoveFromFavourites(props?.postId as string)
              }
            />
          )}
        </section>
        <section className="flex gap-2 items-center">
          {props?.likesPictures?.map((item, idx) => (
            <Avatar key={idx}>
              <AvatarImage src={item} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}

          {/* <AvatarGroup>
            {props?.likesPictures?.map((item, idx) => (
              <Avatar
                key={idx}
                src={item}
                alt="profile picture"
                size={20}
                radius="xl"
                name={props?.poster?.full_name}
                color="initials"
              />
            ))}
          </AvatarGroup> */}
          {props?.likeBy && Object.keys(props?.likeBy).length ? (
            <p className="text-regular-12 text-duduzili-neutral-600">
              {props?.likeBy}
            </p>
          ) : null}
        </section>
      </div>
    </div>
  );
}

export default PostContainer;
