type ContentType = {
  type: "paragraph" | "link";
  content: string;
};

export type PostType = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: ContentType[];
};

export type CommentType = {
  id: string;
  content: string;
  name: string;
  avatarUrl: string;
  isActiveUser: boolean
};
