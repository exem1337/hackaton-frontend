import React from "react";
import { Button, Card } from "react-bootstrap";
import { TEST_STATUS_MAP } from "../../constants/testStatusMap.const";
import { ITestPageItem } from "../../model/test.model";

interface ITestPageItemProps {
  key: number;
  test: ITestPageItem;
}

const TestPageItem = ({ key, test }: ITestPageItemProps) => {
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
            <span>Статус: {TEST_STATUS_MAP.get(test.status)}</span>
          </div>
        </Card.Text>
        <Button variant="primary">Пройти тестирование</Button>
      </Card.Body>
    </Card>
  );
};

export default TestPageItem;
