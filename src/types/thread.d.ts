import { IUser } from "./user";

export interface IThread {
   id: number;
   content?: string;
   images?: IThreadImage[];
   createdAt: string;
   updatedAt: string;
   userId: number;
   mainThreadId?: number;
   user: Omit<IUser>;
   _count: {
      replies: number;
      likes: number;
   };
}

export interface IThreadImage {
   id: number;
   url: string;
   threadId: number;
}

export interface IThreadV2 {
   id: number;
   content: string;
   authorId: number;
   threadId?: number;
   replies: object;
   images: object;
   author: {
      id: number;
      email: string;
      username: string;
      fullname: string;
      password: string;
   };
}

export interface ThreadDTO {
   userId: number;
   content?: string;
   images?: FileList;
   mainThreadId?: number;
}
