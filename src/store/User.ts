import {makeAutoObservable} from "mobx";
import {IUser} from "../model/IUser";
import AuthService from "../service/AuthService";

export default new class User {
   user = {} as IUser
   isLoading = false;
   messages = '';
   isAuth = false;
   constructor() {
      makeAutoObservable(this);
   }
   setAuth(bool: boolean) {
      this.isAuth = bool;
   }

   setUser(user: IUser) {
      this.user = user;
   }
   setMessages(message: string) {
      this.messages = message;
   }
   async login(email: string, password: string) {
      try {
         const response = await AuthService.login(email, password);
         console.log(response);
         localStorage.setItem('token', response.data.accessToken);
         this.setAuth(true);
         this.setUser(response.data.user);
      } catch (e) {
         console.log(e.response);
         this.setMessages(e.response?.data?.message);
         throw e.response;
      }
   }
}