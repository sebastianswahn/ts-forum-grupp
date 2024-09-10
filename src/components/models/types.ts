import { Timestamp } from "mongodb";

export type ThreadCategory = "QNA" | "Thread";

export type QNAThread = Thread & {
  category: "QNA";
  answered: string;
};

export interface Thread {
  id: string;
  title: string;
  content: string;
  category: ThreadCategory;
  author: string;
  comments?: Comment[];
}
export type Comment = {
  id: string;
  threadIndex: number;
  content: string;
  author: string;
  createdAt: Timestamp;
};

export interface CreateThreadFormProps {
  onCreate: (thread: Thread) => void;
}

export interface ThreadInfoProps {
  id: string;
}
