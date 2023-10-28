import {makeAutoObservable} from "mobx";
import {IUser} from "../model/IUser";
import AuthService from "../service/AuthService";
import { EUserRole } from "../enums/userRole.enum";

export default new class User {
   user = {
      id: 1,
      email: 'example@mail.ru',
      role: EUserRole.Employee,
      first_name: 'Данила',
      last_name: 'Акладский',
      middle_name: 'Вячеславович',
      phone: '+79010857228'
   } as unknown as IUser
   isLoading = false;
   messages = '';
   isAuth = false;

   constructor() {
      makeAutoObservable(this);
   }
   
   get isAdmin(): boolean {
      return this.user?.role === EUserRole.Admin;
   }

   get isPortalAdmin(): boolean {
      return this.user?.role === EUserRole.PortalAdmin;
   }

   get isHrManager(): boolean {
      return this.user?.role === EUserRole.HrManager;
   }

   get isEmployee(): boolean {
      return this.user?.role === EUserRole.Employee;
   }

   get isLogin(): boolean {
      return !!this.user?.id;
   }
   
   setAuth(bool: boolean): void {
      this.isAuth = bool;
   }

   setUser(user: IUser): void {
      this.user = user;
   }

   setMessages(message: string): void {
      this.messages = message;
   }

   async login(form): Promise<void> {
      const {email, password} = form
      try {
         const response = await AuthService.login(email, password);
         localStorage.setItem('token', response.data.accessToken);
         this.setAuth(true);
         this.setUser(response.data.user);
         console.log("response: ",response)
      } catch (e) {
         console.log("error: ", e.response);
         this.setMessages(e.response?.data?.message);
      }
   }
}