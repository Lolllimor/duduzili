import { MdMoreVert } from 'react-icons/md';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useState } from 'react';

function PostMenu({
  username,
  is_following,
  postId,
  isComment,
  commentId,
  parentCommentId,
}: {
  username: string;
  is_following: boolean;
  postId: string;
  commentId?: string;
  parentCommentId?: string;
  isComment?: boolean;
  }) {
  
    const [isMuted, setIsMuted] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);


  return (
    <span className="cursor-pointer">
      <MdMoreVert size={18} />
    </span>
    // <DropdownMenu>
    //   <DropdownMenuTrigger>
    //     <span className="cursor-pointer">
    //       <MdMoreVert size={18} />
    //     </span>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuItem>
    //       <Link
    //         href={
    //           isComment
    //             ? `/comment/${postId}/${username}/${commentId}`
    //             : ` /posts/${username}/${postId}`
    //         }
    //       >
    //         View {isComment ? 'Comment' : 'post'}
    //       </Link>
    //     </DropdownMenuItem>
    //     <DropdownMenuItem>
    //       {is_following ? 'Unfollow' : 'Follow'} @{username}
    //     </DropdownMenuItem>
    //     <DropdownMenuItem>
    //       {isMuted ? 'Unmute' : 'Mute'} @{username}
    //     </DropdownMenuItem>
    //     <DropdownMenuItem>Report post</DropdownMenuItem>
    //     <DropdownMenuItem>
    //        {isBlocked ? 'Unblock' : 'Block'} @{username}
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    // <Menu classNames={classes}>

    //   <Menu.Dropdown>

    //     {user?.username !== username ? (
    //       <>
    //         <Menu.Item
    //           onClick={followUnfollow}
    //           leftSection={<UserMinus size={16} />}
    //         >
    //           {isFollowing ? "Unfollow" : "Follow"} @{username}
    //         </Menu.Item>
    //         <Menu.Item
    //           onClick={muteUnmute}
    //           leftSection={<VolumeSlash size={16} />}
    //         >
    //           {isMuted ? "Unmute" : "Mute"} @{username}
    //         </Menu.Item>
    //         <Menu.Item
    //           onClick={openReportPost}
    //           leftSection={<Flag color="#ED5556" />}
    //           style={{ color: "#ED5556" }}
    //         >
    //           Report post
    //         </Menu.Item>
    //         <Menu.Item
    //           onClick={blockUnblock}
    //           leftSection={<Slash color="#ED5556" size={16} />}
    //           style={{ color: "#ED5556" }}
    //         >
    //           {isBlocked ? "Unblock" : "Block"} @{username}
    //         </Menu.Item>
    //       </>
    //     ) : (
    //       <Menu.Item
    //         onClick={isComment ? deleteComment : deletePost}
    //         leftSection={<Trash color="#ED5556" size={16} />}
    //         style={{ color: "#ED5556" }}
    //       >
    //         Delete {isComment ? "Comment" : "post"}
    //       </Menu.Item>
    //     )}
    //   </Menu.Dropdown>
    //   <ReportPost
    //     postId={postId}
    //     opened={reportPostOpened}
    //     close={closeReportPost}
    //   />
    // </Menu>
  );
}

export default PostMenu;
