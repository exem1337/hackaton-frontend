import { EUserRole } from "../enums/userRole.enum";

export interface IUser{
   email: string;
   id: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   phone: string;
   role: EUserRole;
}