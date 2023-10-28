import $api from "../http";
import {AuthResponse} from "../model/response/AuthResponse";
import userStore from "../store/User";

export default class EmployerService {
   static async getAllUSer(): Promise<void> {
      try {
         const userCredentials = (await $api.get('/users/all', )).data;
         return userCredentials
      } catch (error) {
         console.log(error)
      }
   }
}