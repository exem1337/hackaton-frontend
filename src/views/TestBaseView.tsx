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

const TestBaseView = observer(() => {
  const navigate = useNavigate();
  const [topic, setTests] = useState([] as Array<IDepartmentTopic>);
  const params = useParams();

  const getTests = async () => {
    try {
      const TestResponse = (await api.get(`/topics/all`))?.data;
      setTests(TestResponse);
    }
    catch (error) {
      console.error(error);
    }
  }

  const editTest = (id: number): void => {
    navigate(`/tests/edit/${id}`);
  }

  useEffect(() => {
    getTests();
  }, [])



  return (
    <div className={"tests-page app-container"}>
      <div className="tests-page--inner">
        <h1 className="tests-page--inner__title">База тестов</h1>
        {topic.map((theme, key) => (
          <div key={key} className="department-view--themes__theme">
            <BaseWrapper title={theme.name} smallTitle>
              <BaseWrapperSlot>
                { userStore?.isOperatingRole() && 
                  <div className="department-view--themes__theme--actions">
                  </div>
                }
                { theme.test?.map((test, index) => <TestPageItem key={index} test={test} buttonText={"Редактировать тест"} handler={editTest} />)}
              </BaseWrapperSlot>
            </BaseWrapper>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TestBaseView;
