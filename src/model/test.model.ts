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
  text: string;
}

export interface ITestEdit {
  name: string;
  questions: Array<ITestEditQuestion>;
  answer?: Array<ITestEditQuestion>;
}

export interface ITestEditQuestion {
  text: string;
  id: number;
  blob_id?: string;
  score: number;
  answers: Array<ItestEditQuestionAnswer>;
}

export interface ItestEditQuestionAnswer {
  id: number;
  text: string;
  is_correct: boolean;
}