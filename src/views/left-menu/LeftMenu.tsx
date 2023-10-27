import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
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

const LeftMenu = () => {
  return (
    <Nav className="px-3 position-fixed start-0 left-menu-nav-bar">
      <Container className={"d-flex flex-column left-menu-container"}>
        <Nav className="mb-auto d-flex flex-column">
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsFillBuildingFill className={"me-2"} />
            </span>
            Наша компания
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <GiBlackBook className={"me-2"} />
            </span>{" "}
            Мое обучение
          </Link>
          <Link to={"/test"} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsJournalCheck className={"me-2"} />
            </span>
            Мои тесты
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsClipboardCheckFill className={"me-2"} />
            </span>
            Мои результаты
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <PiNotepadBold className={"me-2"} />
            </span>
            Мои обращения{" "}
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <PiNotepadBold className={"me-2"} />
            </span>
            Мои заявки{" "}
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-baseline"}>
            <span className={"d-flex align-items-center"}>
              <BsDatabase className={"me-2"} />
            </span>
            База учебных материалов
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <span className={"d-flex align-items-center"}>
              <BsDatabase className={"me-2"} />
            </span>
            База тестов
          </Link>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
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
        </Nav>
        <Nav className={"mt-auto"}>
          <Link to={""} className={"nav-link d-flex align-items-center"}>
            <AiFillSetting className={"me-2"} />
            Настройки
          </Link>
        </Nav>
      </Container>
    </Nav>
  );
};

export default LeftMenu;
