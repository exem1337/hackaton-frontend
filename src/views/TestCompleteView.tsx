import React, { useEffect, useState } from 'react'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper';
import { ITest, ITestEdit } from '../model/test.model';
import { useParams } from 'react-router-dom';
import api from '../http'
import { Button, Form } from 'react-bootstrap';

const TestCompleteView = () => {
  const [test, setTest] = useState<ITestEdit>({} as ITestEdit);
  const params = useParams();
  const [answers, setAnswers] = useState<Array<{ questionId: number, answerId: number }>>([])

  useEffect(() => {
    getTest();
  }, [])

  const getTest = async () => {
    const testResponse = (await api.get(`/tests/test/one/${params.id}`))?.data;
    setTest(testResponse);
    setAnswers(test.answer?.map((question) => ({
      questionId: question.id,
      answerId: question.answers?.[0]?.id
    })))
  }

  const setAnswersCheck = (questionId: number, answerId: number) => {
    setAnswers(answers?.map((answer) => ({
      ...answer,
      answerId: answer.questionId === questionId ? answerId : answer.answerId
    })))
  }

  const getCheckedAnswerId = (questionId: number): number => {
    return answers?.find((answer) => answer.questionId === questionId)?.answerId;
  }

  return (
    <div className="app-container test-complete">
      <BaseWrapper title={`Тестирование ${test.name}`}>
        <BaseWrapperSlot>
          { test.answer?.map((question, index) => 
          <div className='test-complete--question'>
            <p>{ question.text }</p>
            <span>Вопрос {index + 1}</span>
            {
              question.answers?.map((answer) => 
                <Form.Check
                  type="radio"
                  label={answer.text}
                  checked={answer.id === getCheckedAnswerId(question?.id)}
                  onClick={() => setAnswersCheck(question.id, answer.id)} 
                />
              )
            }
          </div>) }
        </BaseWrapperSlot>
      </BaseWrapper>

      <Button>Отправить все и завершить тест</Button>
    </div>
  )
}

export default TestCompleteView;