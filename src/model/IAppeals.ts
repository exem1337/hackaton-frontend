export interface IAppeals{
   id: number,
   user_id: number,
   status: string,
   createdAt: Date,
   updatedAt: Date,
   text: string,
   author: string,
   hr_answers: IHrAnswers[]
}
interface IHrAnswers {
   id: number,
   appeal_id: Date,
   text: string,
   createdAt: Date,
   updatedAt: Date,
}