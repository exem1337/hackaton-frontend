import React, { useEffect, useState } from "react";
import TestPageItem from "../components/tests/TestsPageItem";
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";
import ActionButton, { ActionButtonSlot } from "../components/ActionButton";
import { MdModeEdit } from "react-icons/md";
import userStore from '../store/User'
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { IDepartmentTopic, IPortalDepartment } from "../model/portal.model";
import api from "../http";

const TestsView = observer(() => {
  const navigate = useNavigate();
  const [topic, setDepartment] = useState([] as Array<IDepartmentTopic>);
  const params = useParams();

  const getDepartment = async () => {
    try {
      const departmentResponse = (await api.get(`/departments/one/${params.id}`))?.data;
      setDepartment(departmentResponse?.department?.topic);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDepartment();
  }, [])

  const onCreateTest = (themeId: number) => {
    navigate(`/topics/${themeId}/test-create`);
  }

  return (
    <div className={"tests-page app-container"}>
      <div className="tests-page--inner">
        <h1 className="tests-page--inner__title">Мои тесты</h1>
        {topic.map((theme, key) => (
          <div key={key} className="department-view--themes__theme">
            <BaseWrapper title={theme.name} smallTitle>
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
                { theme.test?.map((test, index) => <TestPageItem key={index} test={test} />)}
              </BaseWrapperSlot>
            </BaseWrapper>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TestsView;
