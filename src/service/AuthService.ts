import $api from "../http";
import { AuthResponse } from "../model/response/AuthResponse";
import userStore from '../store/User';
import { IUser, IUserInfoResponse, IUserInfoRolesResponse } from "../model/IUser";
import Cookies from 'js-cookie'
import { FileService } from "./File.service";

export default class AuthService {
   static async login(email: string, password: string): Promise<void> {
      try {
         const userCredentials = (await $api.post<AuthResponse>('/auth/login', { username: email, password })).data as AuthResponse;
         userStore.setUser(await this.getUserInfoById(userCredentials.id));
         console.log(userCredentials)
         this.setTokenCookie(userCredentials)
      }
      catch (error) {
         console.error(error);
      }
   }

   static async logout(): Promise<void> {
      Cookies.remove('token');
      Cookies.remove('refresh');
      userStore.logout();
   }

   static async getUserInfoById(id: number) {
      const userInfo = (await $api.get(`/users/one/${id}`)).data as IUserInfoResponse;
      userInfo.roles = userInfo.roles?.map((role) => role.name) as unknown as Array<IUserInfoRolesResponse>;
      userInfo.avatar = await FileService.getFileBase64(userInfo.avatar_salt)
      return userInfo as unknown as IUser;
   }

   static setTokenCookie(tokens: AuthResponse) {
      console.log(tokens)
      Cookies.set('token', tokens.accessToken);
      Cookies.set('refresh', tokens.refreshToken);
      Cookies.set('userId', tokens.id);
   }

   static async refresh() {
      const id = Cookies.get('userId');
      if (id) {
         userStore.setUser(await this.getUserInfoById(id));
      }
   }
}