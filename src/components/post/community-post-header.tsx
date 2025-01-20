import { GoDotFill } from 'react-icons/go';
import { PostContainerProps } from './post-container';
import Link from 'next/link';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import PostMenu from './post-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials } from '../community/profile-drawer';

dayjs.extend(RelativeTime);

function CommunityPostHeader(props?: PostContainerProps) {
  return (
    <header className="flex items-start justify-between">
      <section className="flex gap-3 items-start">
        <div className="relative w-12 h-12 rounded-lg">
          <Avatar className="size-12">
            <AvatarImage
              src={props?.communityDetails?.community_cover_photo ?? ''}
            />
            <AvatarFallback>
              {getInitials(props?.poster?.full_name || '')}
            </AvatarFallback>
          </Avatar>
          {/* <img
            alt="profile picture"
            src={
              props?.communityDetails?.community_cover_photo ??
              '/default-community-pic.png'
            }
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          /> */}
          <Link
            href={`/${props?.poster?.username}`}
            style={{
              position: 'absolute',
              bottom: '-10px',
              right: '-10px',
              border: '1px solid white',
              borderRadius: '100%',
              objectFit: 'cover',
            }}
          >
            <Avatar className="size-6">
              <AvatarImage src={props?.poster?.profile_picture} />
              <AvatarFallback>
                {getInitials(props?.poster?.full_name || '')}
              </AvatarFallback>
            </Avatar>
            {/* <Avatar
              alt="profile picture"
              size={24}
              src={props?.poster?.profile_picture ?? ""}
              name={props?.poster?.full_name}
              color="initials"
            /> */}
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-semibold-16 max-sm:text-semibold-14 text-duduzili-neutral-1000">
            {props?.communityDetails?.community_name}
          </h3>
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-regular-14 max-sm:text-regular-12 text-duduzili-neutral-1000">
              {props?.poster?.full_name}
            </h3>
            <GoDotFill color="#8E9391" size={8} />
            <span className="text-regular-12 max-sm:text-regular-10 text-duduzili-neutral-800">
              @{props?.poster?.username}
            </span>
            <GoDotFill color="#8E9391" size={8} />
            <span className="text-regular-12 text-duduzili-neutral-600">
              {dayjs(props?.date).fromNow()}
            </span>
            {props?.isEdited ? (
              <>
                <GoDotFill color="#8E9391" size={8} />
                <span className="text-regular-12 text-duduzili-violet-100">
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

export default CommunityPostHeader;
