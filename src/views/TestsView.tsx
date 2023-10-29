import React from "react";
import TestPageItem from "../components/tests/TestsPageItem";
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";

const TestsView = () => {
  const themes = [
    {
      id: 1,
      title: 'Название темы 1',
      fileName: 'Файл',
      tests: [
        {
          id: 22,
          title: 'Тест 1',
          completed: false,
        },
        {
          id: 23,
          title: 'Тест 2',
          completed: true,
        }
      ]
    },
    {
      id: 2,
      title: 'Название темы 2',
      fileName: 'Файл',
      tests: [
        {
          id: 22,
          title: 'Тест 1',
          completed: false,
        },
        {
          id: 23,
          title: 'Тест 2',
          completed: true,
        }
      ]
    }
  ]

  return (
    <div className={"tests-page app-container"}>
      <div className="tests-page--inner">
        <h1 className="tests-page--inner__title">Мои тесты</h1>
        {themes.map((theme, key) => (
          <div key={key}>
            <BaseWrapper title={theme.title} smallTitle>
              <BaseWrapperSlot>
                { theme.tests?.map((test, index) => <TestPageItem key={index} test={test} />)}
              </BaseWrapperSlot>
            </BaseWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestsView;
