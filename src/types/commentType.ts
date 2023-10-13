export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type AddCommentType = {
  postId: number;
  name: string;
  body: string;
  email: string;
};
