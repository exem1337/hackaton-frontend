export interface ITestPageItem {
  author: string;
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

export interface ITestEdit {
  name: string;
  questions: Array<ITestEditQuestion>
}

export interface ITestEditQuestion {
  title: string;
  id: number;
  img?: string;
  answers: Array<ItestEditQuestionAnswer>;
}

export interface ItestEditQuestionAnswer {
  id: number;
  title: string;
  isCorrect: boolean;
}