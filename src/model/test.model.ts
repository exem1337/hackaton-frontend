import { ETestStatuses } from "../enums/testStatuses.enum";

export interface ITestPageItem {
  author: string;
  status: ETestStatuses;
  count: number;
  title: string;
  img?: string;
  completed: boolean;
  id: number;
}

export interface ITest {
  id: number;
  title: string;
}