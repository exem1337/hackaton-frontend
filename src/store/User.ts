import {makeAutoObservable} from "mobx";
import {IUser} from "../model/IUser";
import { EUserRole } from "../enums/userRole.enum";

export default new class User {
   user = {
   } as unknown as IUser
   isLogin = false;

   constructor() {
      makeAutoObservable(this);
   }
   
   isAdmin(): boolean {
      return this.user?.roles?.includes(EUserRole.Admin);
   }

   isPortalAdmin(): boolean {
      return this.user?.roles?.includes(EUserRole.PortalAdmin);
   }

   get isHrManager(): boolean {
      return this.user?.roles?.includes(EUserRole.HrManager);
   }

   get isEmployee(): boolean {
      return this.user?.roles?.includes(EUserRole.Employee);
   }

   isOperatingRole(): boolean {
      return this.user?.roles?.some((role) => [EUserRole.Admin, EUserRole.HrManager, EUserRole.PortalAdmin].includes(role));
   }
  
   logout() {
      this.user = {} as IUser;
      this.isLogin = false;
   }

   setUser(user: IUser): void {
      this.user = user;
      this.isLogin = true;
      console.log(user)
   }

   setMessages(message: string): void {
      // this.messages = message;
   }
}