import React from "react";
import { Button, Card } from "react-bootstrap";
import { ITestPageItem } from "../../model/test.model";
import { useNavigate } from "react-router-dom";
import { IDepartmentTopicTest } from "../../model/portal.model";

interface ITestPageItemProps {
  key: number;
  test: Partial<IDepartmentTopicTest>;
}

const TestPageItem = ({ key, test }: ITestPageItemProps) => {
  const navigate = useNavigate();

  const onGoToTest = (id: number): void => {
    navigate(`/tests/${id}`);
  }

  return (
    <Card key={key} className={"test-page mb-4"}>
      {/* <Card.Img variant="top" className={"test-page-img"} src={test.img} /> */}
      <Card.Body>
        <Card.Title>{test.name}</Card.Title>
        <Card.Text>
          <div className={"test-page-well-info"}>
            <span>Автор: Елена Суховей</span>
            <span>Название курса: Курс по сварке</span>
            <span>Статус: Активный</span>
          </div>
        </Card.Text>
        <Button variant="primary" onClick={() => onGoToTest(test.id)}>Пройти тестирование</Button>
      </Card.Body>
    </Card>
  );
};

export default TestPageItem;
