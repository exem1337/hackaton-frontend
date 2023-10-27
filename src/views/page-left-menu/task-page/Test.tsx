import React from 'react';
import {Button, Card} from "react-bootstrap";

const Test = ({task, key}) => {
   return (
      <Card key={key} className={"test-page mb-4"}>
         <Card.Img variant="top" className={"test-page-img"} src={task.img}/>
         <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>
               <div className={'test-page-well-info'}>
                  <span>Автор: {task.author}</span>
                  <span>Кол-во задач{task.item}</span>
                  <span>Название курса: {task.well}</span>
                  <span>Статус: {task.status}</span>
               </div>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
   );
};

export default Test;