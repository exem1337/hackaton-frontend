import api from '../http'

export class UserApiService {
  public static async getAllRoles(): Promise<Array<unknown>> {
    return (await api.get('/roles/all'))?.data;
  }
}