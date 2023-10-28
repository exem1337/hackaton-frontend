import $api from "../http";
import {AuthResponse} from "../model/response/AuthResponse";
import userStore from "../store/User";
import {FileService} from "./File.service";
import {IUsers} from "../model/IUser";

export default class EmployerService {
   static async getAllUSer(): Promise<Array<IUsers>> {
      try {
         let userCredentials = (await $api.get('/users/all', )).data;
         userCredentials = await Promise.all(userCredentials.map(async (value) => ({
            ...value, avatar: await FileService.getFileBase64(value.avatar_salt)
         })))
         return userCredentials
      } catch (error) {
         console.log(error)
      }
   }
}