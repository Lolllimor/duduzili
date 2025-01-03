
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