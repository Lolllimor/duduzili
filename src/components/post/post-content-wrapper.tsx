import { usePathname } from "next/navigation";
import { PostContainerProps } from "./post-container";
import React, { ReactNode } from "react";
import Link from "next/link";

function PostContentWrapper(
  props?: PostContainerProps & { children: ReactNode }
) {
  const pathname = usePathname();
  return (
    props?.isComment
      ? !pathname.includes(props?.commentId as string)
      : !pathname.includes(props?.postId as string)
  ) ? (
    <Link
      href={
        props?.isComment
          ? `/comment/${props?.postId}/${props?.poster?.username}/${props?.commentId}`
          : `/posts/${props?.poster?.username}/${props?.postId}`
      }
      className="text-regular-16 content-anchor text-duduzili-neutral-1000"
    >
      {props?.children}
    </Link>
  ) : (
    <div className="text-regular-16 content-anchor text-duduzili-neutral-1000">
      {props?.children}
    </div>
  );
}

export default PostContentWrapper;