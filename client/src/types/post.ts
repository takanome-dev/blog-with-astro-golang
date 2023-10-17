import type { User } from "./user";

export interface Post {
  post: {
    id: string;
    title: string;
    image: string;
    body: string;
    is_draft: boolean;
    is_published: boolean;
    created_at: string;
    updated_at: string;
    user_id?: string;
  };
  user?: User;
}
