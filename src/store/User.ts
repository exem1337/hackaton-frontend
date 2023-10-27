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
   async login(form) {
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