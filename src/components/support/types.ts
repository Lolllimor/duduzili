export interface MessageTypes {
  conversation_id: string;
  last_message_details: {
    created: string;
    is_admin_sender: boolean;
    media: string[];
    message: string;
  };
  unread_messages_from_user: number;
  user_details: {
    full_name: string;
    is_staff: boolean;
    profile_photo: string;
    username: string;
  };
}
