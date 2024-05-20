export interface StreamPushEvent {
  message: Message;
  user: User;
  channel: Channel;
  request_info: RequestInfo;
}

export interface Message {
  id: string;
  text: string;
  html: string;
  type: string;
  user: any;
  attachments: Attachment[];
  latest_reactions: any[];
  own_reactions: any[];
  reaction_counts: any;
  reaction_scores: any;
  reaction_groups: any;
  reply_count: number;
  deleted_reply_count: number;
  cid: string;
  created_at: string;
  updated_at: string;
  shadowed: boolean;
  mentioned_users: any[];
  silent: boolean;
  pinned: boolean;
  pinned_at: any;
  pinned_by: any;
  pin_expires: any;
}

export interface Attachment {
  thumb_url: string;
  type: string;
  fallback: string;
  image_url: string;
  original_width: number;
  original_height: number;
}

export interface User {
  id: string;
  role: string;
  created_at: string;
  updated_at: string;
  last_active: string;
  banned: boolean;
  online: boolean;
  name: string;
  image: string;
}

export interface Channel {
  cid: string;
  id: string;
  type: string;
  last_message_at: string;
  created_by: CreatedBy;
  created_at: string;
  updated_at: string;
  frozen: boolean;
  disabled: boolean;
  members: Member[];
  member_count: number;
  config: Config;
  auto_translation_language: string;
}

export interface CreatedBy {
  id: string;
  role: string;
  created_at: string;
  updated_at: string;
  last_active: string;
  banned: boolean;
  online: boolean;
  image: string;
  name: string;
}

export interface Member {
  user_id: string;
  user: User2;
  status: string;
  created_at: string;
  updated_at: string;
  banned: boolean;
  shadow_banned: boolean;
  role: string;
  channel_role: string;
  notifications_muted: boolean;
}

export interface User2 {
  id: string;
  role: string;
  created_at: string;
  updated_at: string;
  last_active: string;
  banned: boolean;
  online: boolean;
  language?: string;
  first_name?: string;
  staff_user?: boolean;
  dashboard_user?: boolean;
  last_name?: string;
  name?: string;
  image?: string;
}

export interface Config {
  name: string;
  typing_events: boolean;
  read_events: boolean;
  connect_events: boolean;
  search: boolean;
  reactions: boolean;
  replies: boolean;
  quotes: boolean;
  mutes: boolean;
  uploads: boolean;
  url_enrichment: boolean;
  custom_events: boolean;
  push_notifications: boolean;
  reminders: boolean;
  mark_messages_pending: boolean;
  polls: boolean;
  message_retention: string;
  max_message_length: number;
  automod: string;
  automod_behavior: string;
  created_at: string;
  updated_at: string;
  commands: string[];
}

export interface RequestInfo {
  type: string;
  ip: string;
  user_agent: string;
  sdk: string;
}
