import React from 'react';
import {ListGroup} from "react-bootstrap";

const MyResult = () => {
   const result = [
      {
         name_test: 'Хахатон',
         result: '100 из 100',
         time: "38 min",
         date: "29.10.2023"
      },
      {
         name_test: 'Тест 2',
         result: '80 из 100',
         time: "22 min",
         date: "29.10.2023"
      },
      {
         name_test: 'Тест 1',
         result: '90 из 100',
         time: "31 min",
         date: "29.10.2023"
      }
   ]


   return (
      <div className={'tests-page app-container'}>
         <h1 className={'mb-4'}>Мои результаты</h1>
         <div>
            <ListGroup as="ol" numbered>
               {result.map((res, index)=>
                  <ListGroup.Item className={'d-flex gap-5'} key={index} as="li">
                     <div>
                        <div>Название теста: {res.name_test}</div>
                        <div>Время прохождения: {res.time}</div>
                     </div>
                     <div>
                        <div>Завершен: {res.date}</div>
                        <div>Результат: {res.result}</div>
                     </div>

                  </ListGroup.Item>
               )}
            </ListGroup>
         </div>
      </div>
   );
};

export default MyResult;