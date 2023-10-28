import { EUserRole } from "../enums/userRole.enum";

export interface IUser{
   email: string;
   id: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   phone: string;
   roles: Array<EUserRole>;
}

export interface IUserInfoResponse{
   email: string;
   id: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   phone: string;
   roles: Array<IUserInfoRolesResponse>;
}

export interface IUserInfoRolesResponse {
   createdAt: string;
   description: string;
   id: number;
   name: EUserRole;
   updatedAt: string;
}

export interface IUserTokenResponse {
   token: string;
   refresh: string;
}

