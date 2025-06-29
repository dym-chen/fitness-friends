export interface IGroupChat {
  id: number;
  name: string;
  created_at: string;
  created_by: string;
  type: string;
  description: string;
}

export interface IMessage {
  id: number;
  group_id: string;
  sender_id: number;
  created_at: string;
  content: string;
  is_deleted: boolean;
  message_type: string;
}
  
