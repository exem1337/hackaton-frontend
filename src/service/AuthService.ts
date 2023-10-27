import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../model/response/AuthResponse";

export  default class AuthService {
   static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
      console.log(email, password);
      return $api.post<AuthResponse>('/login', {email, password})
   }

   static async registration(userName: string, email: string, password: string, agreement: boolean): Promise<AxiosResponse<AuthResponse>> {
      console.log("aaaa")
      return $api.post<AuthResponse>('/registration', {userName: "Airistia", email: email, password: password, agreement: agreement})
   }

   static async logout(): Promise<void> {
      return $api.post('/logout')
   }
   //
   // static async activate(email: string, flag: boolean) {
   //     return $api.post('/activation', {email, flag})
   // }
}