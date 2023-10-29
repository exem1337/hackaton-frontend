import $api from "../http";
import {FileService} from "./File.service";

export default class AppealsService {
   static async getMyAppeals() {
      const userInfo = (await $api.get(`/appeals/myappeals`)).data;
      return userInfo;
   }

   static async postAppeals(data) {
      try {
         const userInfo = (await $api.post(`/hr_answers`, data)).data;
         return userInfo;
      } catch (e) {
         console.log(e)
      }
   }
   static async postAddAppeals(data) {
      try {
         const userInfo = (await $api.post(`/appeals`, data)).data;
         return userInfo;
      } catch (e) {
         console.log(e)
      }
   }
}