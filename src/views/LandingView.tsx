import React from "react";
import background from './bg.png';
import { Button } from "react-bootstrap";
import settings from './gear.svg';
import vr from './vr.svg';
import teacher from './teacher.svg';
import engine from './engine.svg';

const LandingView = () => {
  return (
    <div className="container">
      <img className="background--img" src={background} alt="" />
      <div className="landing">
        <div className="landing--block">
          <h1>Возможности</h1>
          <div className="opportunities">
            Создание инновационной обучающей и тестовой платформы, объединяющей стандартные методы обучения с использованием VR-технологий. Это позволит предприятиям обучать сотрудников, имитируя реальные рабочие ситуации, что существенно повысит эффективность обучения и подготовки к рабочим задачам.
          </div>
        </div>
        <div className="landing--block">
          <h1>Тарифы</h1>



          <div className="tariffs">

            <div className="card--free card text-center">
              <div className="card-body">
                <h5 className="card-title">Бесплатный</h5>
                <p className="card-text">Включает в себя 1 администратора и до 10 сотрудников</p>
                <Button className="card--btn btn-primary m-3">Попробовать</Button>
              </div>
            </div>


            <div className="card--busines card text-center">
              <div className="card-body">
                <h5 className="card-title">Малый бизнес</h5>
                <p className="card-text">Включает в себя 3 администраторов и до 20 сотрудников</p>
                <Button className="card--btn btn-primary m-3">Попробовать</Button>
              </div>
            </div>

            <div className="card--enterprise card text-center">
              <div className="card-body">
                <h5 className="card-title">Предприятие</h5>
                <p className="card-text">Включает в себя 5 администраторов и до 50 сотрудников</p>
                <Button className="card--btn btn-primary m-3">Попробовать</Button>
              </div>
            </div>

            <div className="card--corporation card text-center">
              <div className="card-body">
                <h5 className="card-title">Корпорация</h5>
                <p className="card-text">Включает в себя 10 администраторов и до 100 сотрудников</p>
                <Button className="card--btn btn-primary m-3">Попробовать</Button>
              </div>
            </div>

          </div>



        </div>
        <div className="landing--block">
          <h1>Внедрение</h1>
          <div className="integration">
            <div className="d-flex">
              <div className="introduction cardst group1">
                <h3>Настройка и Интеграция</h3>
                <p>Мы обеспечим гладкую интеграцию с внутренними системами вашего предприятия.</p>
                <img className="image--cardst" src={settings} alt="" />
              </div>

              <div className="introduction cardst group2">
                <h3>Обучение администраторов</h3>
                <p>Обучим ваших сотрудников основам администрирования и настройки системы.</p>
                <img className="image--cardst" src={vr} alt="" />
              </div>
            </div>
            <div className="d-flex">
              <div className="introduction cardst group1">
                <h3>Поставка VR-оборудования</h3>
                <p>Мы предлагаем высококачественное VR-оборудование по конкурентоспособным ценам.</p>
                <img className="image--cardst" src={teacher} alt="" />
              </div>
              <div className="introduction cardst group2">
                <h3>Оптимизация рабочего процесса</h3>
                <p>Мы гарантируем грамотную настройку и плавное внедрение, что позволит вашему предприятию оперативно воспользоваться всеми преимуществами новой обучающей платформы.</p>
                <img className="image--cardst" src={engine} alt="" />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingView;