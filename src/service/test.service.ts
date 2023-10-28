import { ITest } from "../model/test.model";

export class TestService {
  private test = {
    id: 1,
    title: 'Тест 1'
  } as ITest;

  public get title() {
    return this.test?.title;
  }
}