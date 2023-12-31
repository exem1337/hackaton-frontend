import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import {
  BsClipboardCheckFill,
  BsDatabase,
  BsFillBuildingFill,
  BsJournalCheck,
} from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { PiNotepadBold } from "react-icons/pi";
import { DISABLED_LEFT_MENU_LOCATIONS } from "../constants/disabledLeftMenuLocations.const";
import userStore from '../store/User';
import { observer } from "mobx-react-lite";

const LeftMenu = observer(() => {
  const { pathname } = useLocation();

  if (DISABLED_LEFT_MENU_LOCATIONS.includes(pathname) || !userStore.isLogin) {
    return;
  }
  
  return (
    <Nav className="px-3 left-menu-nav-bar">
      <Container className={"d-flex flex-column left-menu-container"}>
        <Nav className="mb-auto d-flex flex-column">
          <Link to={"/portal"} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsFillBuildingFill className={"me-2"} />
            </span>
            Наша компания
          </Link>
          <Link to={`/department/${userStore?.user?.department_id}`} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <GiBlackBook className={"me-2"} />
            </span>{""}
            Мое обучение
          </Link>
          <Link to={`/department/${userStore?.user?.department_id}/tests`} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsJournalCheck className={"me-2"} />
            </span>
            Мои тесты
          </Link>
          <Link to={"/my_result"} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsClipboardCheckFill className={"me-2"} />
            </span>
            Мои результаты
          </Link>
          { !userStore.isOperatingRole() &&
            <Link to={"/my_applications"} className={"nav-link d-flex align-items-center"}>
              <span className={"d-flex align-items-center"}>
                <PiNotepadBold className={"me-2"} />
              </span>
              Мои обращения{" "}
            </Link>
          }

          { userStore.isOperatingRole() && <>
            <Link to={"/my_applications"} className={"nav-link d-flex align-items-center"}>
              <span className={"d-flex align-items-center"}>
                <PiNotepadBold className={"me-2"} />
              </span>
              Мои заявки{" "}
            </Link> 
            <Link to={"/materials"} className={"nav-link d-flex align-items-baseline"}>
              <span className={"d-flex align-items-center"}>
                <BsDatabase className={"me-2"} />
              </span>
              База учебных материалов
            </Link>
            <Link to={"/testbase"} className={"nav-link d-flex align-items-center"}>
              <span className={"d-flex align-items-center"}>
                <BsDatabase className={"me-2"} />
              </span>
              База тестов
            </Link>
            <Link to={"/employee"} className={"nav-link d-flex align-items-center"}>
              <span className={"d-flex align-items-center"}>
                <BsDatabase className={"me-2"} />
              </span>
              База сотрудников{" "}
            </Link>
            <Link to={""} className={"nav-link d-flex align-items-baseline"}>
              <span className={"d-flex align-items-center"}>
                <TbReportAnalytics className={"me-2"} />
              </span>
              Аналитика по компании
            </Link>
            { userStore.isAdmin() && 
              <Link to={"/admin"} className={"nav-link d-flex align-items-center"}>
                <AiFillSetting className={"me-2"} />
                Настройки
              </Link>
            }
          </> 
        }
        </Nav>
      </Container>
    </Nav>
  );
});

export default LeftMenu;
