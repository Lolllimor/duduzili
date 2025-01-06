
export interface Login {
  username_email: string;
  password: string;
}


export interface ILinkPreviewResponse {
  metadata: Metadata;
}

export interface Metadata {
  title: string;
  description: string;
  image: string;
  siteName: string;
  hostname: string;
}

export interface PostOwnerDetails {
  profile_picture: string;
  username: string;
  full_name: string;
}

export interface PostResponseCommunityDetails {
  community_name: string;
  community_cover_photo: string;
}

export interface  PostItem  {
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
