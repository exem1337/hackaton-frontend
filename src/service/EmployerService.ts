import $api from "../http";
import { FileService } from "./File.service";
import { IUsers } from "../model/IUser";

export default class EmployerService {
   static async getAllUSer(): Promise<Array<IUsers>> {
      try {
         let userCredentials = (await $api.get('/users/all',)).data;
         userCredentials = await Promise.all(userCredentials.map(async (value) => ({
            ...value, avatar: value.avatar_salt ? await FileService.getFileBase64(value.avatar_salt) : ''
         })));
         // if(userCredentials.avatar === null) FileService.getFile()
         return userCredentials
      } catch (error) {
         console.log(error)
      }
   }

   static async getOneUSer(id: number): Promise<IUsers> {
      try {
         let userCredentials = (await $api.get(`/users/one/${id}`,)).data;
         userCredentials = { ...userCredentials, avatar: userCredentials.avatar_salt ? await FileService.getFileBase64(userCredentials.avatar_salt) : '' }
         return userCredentials
      } catch (error) {
         console.log(error)
      }
   }

   static async pathUser(user: IUsers): Promise<void> {
      try {
         delete user.avatar;
         return await $api.patch(`/users/${user.id}`, user);
      } catch (error) {
         console.log(error)
      }
   }
}