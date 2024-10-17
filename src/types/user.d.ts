export interface IUser {
   id: number;
   username: string;
   email: string;
   profile: IProfile;
}

export interface IProfile {
   id: number;
   fullname?: string;
   avatar?: string;
   bio?: string;
   background?: string;
   userId: number;
}
