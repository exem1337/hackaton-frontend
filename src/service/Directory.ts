import $api from "../http";
import {IPosition} from "../model/IDirectory";
export default class Directory {

   static async getAllPosition(): Promise<Array<IPosition>> {
      try {
         const direct = (await $api.get(`/api/positions`)).data;
         return direct;
      } catch (error) {
         console.log(error)
      }
   }
}