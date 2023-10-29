import { useState } from "react"
import { ITestEdit } from "../model/test.model"
import { Button, Form } from "react-bootstrap"
import ActionButton, { ActionButtonSlot } from "../components/ActionButton"
import { AiFillDelete } from "react-icons/ai";
import api from '../http'
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";
import { useParams } from "react-router-dom";

const TestEditView = () => {
  const params = useParams();

  const [test, setTest] = useState<ITestEdit>({
    name: '',
    questions: [],
  })

  const addNewQuestion = () => {
    setTest({
      ...test,
      questions: [...test.questions, {
        id: Math.random(),
        text: '',
        answers: [],
        score: 1,
      }]
    })
  }

  const setQuestionName = (questionId: number, text: string) => {
    setTest({
      ...test,
      questions: test.questions?.map((question) => ({
        ...question,
        text: questionId === question.id ? text : question.text,
      }))
    })
  }

  const addNewQuestionAnswer = (questionId) => {
    setTest({
      ...test,
      questions: test.questions?.map((question) => ({
        ...question,
        answers: question.id === questionId 
          ? [...question.answers, { 
              id: Math.random(),
              text: '',
              is_correct: false,
            }]
          : question.answers,
      }))
    })
  }

  const setTestName = (text: string) => {
    setTest({
      ...test,
      name: text,
    })
  }

  const setAnswerTitle = (answerId: number, text: string) => {
    setTest({
      ...test,
      questions: test.questions?.map((question) => ({
        ...question,
        answers: question.answers?.map((answer) => ({
          ...answer,
          text: answer.id === answerId ? text : answer.text,
        }))
      }))
    })
  } 

  const onSetAnswerCorrect = (answerId: number) => {
    setTest({
      ...test,
      questions: test.questions?.map((question) => ({
        ...question,
        answers: question.answers?.some((answer) => answer.id === answerId) 
          ? question.answers?.map((answer) => ({
              ...answer,
              is_correct: answer.id === answerId
            })) 
          : question.answers
      }))
    })
  }

  const onDeleteAnswer = (answerId: number) => {
    setTest({
      ...test,
      questions: test.questions?.map((question) => ({
        ...question,
        answers: question.answers?.filter((answer) => answer.id !== answerId),
      }))
    })
  }

  const onDeleteQuestion = (questionId: number) => {
    setTest({
      ...test,
      questions: test.questions?.filter((question) => question.id !== questionId),
    })
  }

  const onSave = async () => {
    await api.post('/tests/submitTest', {
      ...test,
      topic_id: Number(params.id),
    })
  }

  return (
    <div className="app-container test-edit">
      <BaseWrapper title="Редактор теста">
        <BaseWrapperSlot>
          <Form.Control
            type="text"
            className="test-edit--name"
            value={test.name}
            placeholder="Название теста"
            onChange={(e) => setTestName(e.target.value)}
          />
          <Button onClick={addNewQuestion}>Добавить вопрос</Button>
          {
            test.questions?.map((question) => 
              <div className="test-edit--question">
                <ActionButton text="Удалить" handler={() => onDeleteQuestion(question.id)}>
                  <ActionButtonSlot>
                    <AiFillDelete />
                  </ActionButtonSlot>
                </ActionButton>
                <Form.Control
                  type="text"
                  value={question.text}
                  placeholder="Текст вопроса"
                  onChange={(e) => setQuestionName(question.id, e.target.value)}
                />
                {
                  question.answers?.map((answer) => 
                    <div className="test-edit--question__answer">
                      <Form.Control
                        type="text"
                        value={answer.text}
                        placeholder="Текст варианта ответа"
                        onChange={(e) => setAnswerTitle(answer.id, e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label="Правильный ответ"
                        checked={answer.is_correct}
                        onClick={() => onSetAnswerCorrect(answer.id)}
                      />
                      <ActionButton text="Удалить" handler={() => onDeleteAnswer(answer.id)}>
                        <ActionButtonSlot>
                          <AiFillDelete />
                        </ActionButtonSlot>
                      </ActionButton>
                    </div>
                  )
                }
                <Button onClick={() => addNewQuestionAnswer(question.id)}>Добавить вариант ответа</Button>
              </div>
            )
          }
        </BaseWrapperSlot>
      </BaseWrapper>
     
      <Button onClick={onSave}>Сохранить</Button>
    </div>
  )
}

export default TestEditView;