export interface Thread {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  comments?: Comment[];
  answered?: string;
}
export type Comment = {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
};
