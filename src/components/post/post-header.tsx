import { GoDotFill } from 'react-icons/go';

import { PostContainerProps } from './post-container';
// import { Avatar } from "@mantine/core";
import Link from 'next/link';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import PostMenu from './post-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials } from '../community/profile-drawer';

dayjs.extend(RelativeTime);
function PostHeader(props?: PostContainerProps) {
  return (
    <header className="flex items-start justify-between">
      <section className="flex gap-3 items-center">
        <Link href={`/${props?.poster?.username}`}>
          <Avatar className="w-11 h-11">
            <AvatarImage src={props?.poster?.profile_picture ?? ''} />
            <AvatarFallback>
              {getInitials(props?.poster?.full_name || "")}
            </AvatarFallback>
          </Avatar>
          {/* <img
            alt="profile picture"
            src={props?.poster?.profile_picture ?? ''}
            width={44}
            height={44}
            radius="xl"
            name={props?.poster?.full_name}
            color="initials"
          /> */}
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/${props?.poster?.username}`}>
            <h3 className="text-semibold-16 max-sm:text-semibold-14 text-duduzili-neutral-1000">
              {props?.poster?.full_name}{' '}
              <span className="text-regular-14 max-sm:text-regular-12 text-duduzili-neutral-800">
                @{props?.poster?.username}
              </span>
            </h3>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-regular-12 max-sm:text-regular-10 text-duduzili-neutral-600">
              {dayjs(props?.date).fromNow()}
            </span>
            {props?.isEdited ? (
              <>
                <GoDotFill color="#8E9391" size={8} />
                <span className="text-regular-12 max-sm:text-regular-10 text-duduzili-violet-100">
                  Edited
                </span>
              </>
            ) : null}
          </div>
        </div>
      </section>
      {props?.hideMenu ? null : (
        <PostMenu
          isComment={props?.isComment}
          is_following={props?.isFollowing as boolean}
          username={props?.poster?.username as string}
          postId={props?.postId as string}
          commentId={props?.commentId as string}
        />
      )}
    </header>
  );
}

export default PostHeader;
