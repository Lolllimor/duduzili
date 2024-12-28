export interface CreateAboutData {
  about: string;
}

export interface CreateContact {
  contact_info: ContactInfo;
}

export interface ContactInfo {
  email: string;
  address: string;
  phone: string;
}


export interface PrivacyData {
  about: string
}
export interface Faq {
  success: boolean;
  status_code: number;
  data: FaqData;
  message: string;
}

export interface FaqData {
  count: number;
  next: null;
  previous: null;
  results: FaqResult[];
}

export interface FaqRequest {
  question: string;
  answer: string;
}

export interface FaqResult {
  question: string;
  answer: string;
  is_displayed: boolean;
  faq_id: string;
}

export interface Deactivated {
  success: boolean;
  status_code: number;
  data: DeactivatedData;
  message: string;
}

export interface DeactivatedData {
  count: number;
  next: null;
  previous: null;
  results: DeactivatedResult[];
}

export interface DeactivatedResult {
  community_count: number;
  post_count: number;
  followings_count: number;
  followers_count: number;
  full_name: string;
  profile_picture: null;
  username: string;
  date_of_deactivation: string;
}
