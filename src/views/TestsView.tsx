import React from "react";
import TestPageItem from "../components/tests/TestsPageItem";
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";
import ActionButton, { ActionButtonSlot } from "../components/ActionButton";
import { MdModeEdit } from "react-icons/md";
import userStore from '../store/User'
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const TestsView = observer(() => {
  const navigate = useNavigate();

  const themes = [
    {
      id: 3,
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
      id: 4,
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

  const onCreateTest = (themeId: number) => {
    navigate(`/topics/${themeId}/test-create`);
  }

  return (
    <div className={"tests-page app-container"}>
      <div className="tests-page--inner">
        <h1 className="tests-page--inner__title">Мои тесты</h1>
        {themes.map((theme, key) => (
          <div key={key} className="department-view--themes__theme">
            <BaseWrapper title={theme.title} smallTitle>
              <BaseWrapperSlot>
                { userStore?.isOperatingRole() && 
                  <div className="department-view--themes__theme--actions">
                    <ActionButton text='Создать тест' handler={() => onCreateTest(theme.id)}>
                      <ActionButtonSlot>
                        <MdModeEdit />
                      </ActionButtonSlot>     
                    </ActionButton> 
                  </div>
                }
                { theme.tests?.map((test, index) => <TestPageItem key={index} test={test} />)}
              </BaseWrapperSlot>
            </BaseWrapper>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TestsView;
