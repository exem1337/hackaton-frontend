import { EUserRole } from "../enums/userRole.enum";

export interface IUser{
   email: string;
   id: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   phone: string;
   roles: Array<EUserRole>;
   avatar_salt?: string;
   avatar?: string;
   portal_id?: number;
   department_id?: number;
}

export interface IUserInfoResponse{
   email: string;
   id: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   phone: string;
   roles: Array<IUserInfoRolesResponse>;
   avatar_salt?: string;
   avatar?: string;
   department_id?: number;
   department: IUserInfoDepartment;
}

export interface IUserInfoDepartment {
   
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

export interface IUsers{
   id: number,
   first_name: string,
   last_name: string,
   middle_name: string,
   avatar: string,
   email: string,
   position: string,
   phone: string
}

