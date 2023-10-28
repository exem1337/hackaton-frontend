import React from "react";
import { Button, Card } from "react-bootstrap";
import { ITestPageItem } from "../../model/test.model";
import { useNavigate } from "react-router-dom";

interface ITestPageItemProps {
  key: number;
  test: Partial<ITestPageItem>;
}

const TestPageItem = ({ key, test }: ITestPageItemProps) => {
  const navigate = useNavigate();

  const onGoToTest = (id: number): void => {
    navigate(`/tests/${id}`);
  }

  return (
    <Card key={key} className={"test-page mb-4"}>
      <Card.Img variant="top" className={"test-page-img"} src={test.img} />
      <Card.Body>
        <Card.Title>{test.title}</Card.Title>
        <Card.Text>
          <div className={"test-page-well-info"}>
            <span>Автор: {test.author}</span>
            <span>Кол-во задач: {test.count}</span>
            <span>Название курса: {test.title}</span>
            <span>Статус: {test.completed ? 'Завершен' : 'Активный'}</span>
          </div>
        </Card.Text>
        <Button variant="primary" disabled={test.completed} onClick={() => onGoToTest(test.id)}>Пройти тестирование</Button>
      </Card.Body>
    </Card>
  );
};

export default TestPageItem;
