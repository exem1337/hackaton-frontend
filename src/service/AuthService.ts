import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../model/response/AuthResponse";

export  default class AuthService {
   static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
      console.log(email, password);
      return $api.post<AuthResponse>('/login', {email, password})
   }

   static async logout(): Promise<void> {
      return $api.post('/logout')
   }
}