import React from "react";
import background from './bg.png';
import { Button, Card, Carousel } from "react-bootstrap";
import settings from './gear.svg';
import vr from './vr.svg';
import teacher from './teacher.svg';
import engine from './engine.svg';

// import Feedback1 from "../../public/images/feedback1.jpg";
// import Feedback2 from "../../public/images/feedback2.jpg";
// import Feedback3 from "../../public/images/feedback3.jpg";


const LandingView = () => {
  return (
    <div className="container" id="home">
      <img className="background--img" src={background} alt="" />
      <div className="landing">
        <div className="landing--block"  id="opportunity">
          <h1>Возможности</h1>
          <div className="opportunities">
            Создание инновационной обучающей и тестовой платформы, объединяющей стандартные методы обучения с использованием VR-технологий. Это позволит предприятиям обучать сотрудников, имитируя реальные рабочие ситуации, что существенно повысит эффективность обучения и подготовки к рабочим задачам.
          </div>
        </div>
        <div className="landing--block"  id="features">
          <h1>Тарифы</h1>



          <div className="tariffs">


            <div className="card--free card text-center m-4">
              <div className="card-body">
                <h3 className="card-title">Бесплатный</h3>
                <hr/>
                <p className="card-text">Включает в себя 1 администратора и до 10 сотрудников</p>
                <br/>
                <Button size="lg" className="card--btn btn-primary">Попробовать</Button>
              </div>
            </div>


            <div className="card--busines card text-center m-4">
              <div className="card-body">
                <h3 className="card-title">Малый бизнес</h3>
                <hr/>
                <p className="card-text">Включает в себя 3 администраторов и до 20 сотрудников</p>
                <br/>
                  <Button size="lg" className="card--btn btn-primary">Попробовать</Button>
                
              </div>
            </div>
            

            <div className="card--enterprise card text-center m-4">
              <div className="card-body">
                <h3 className="card-title">Предприятие</h3>
                <hr/>
                <p className="card-text">Включает в себя 5 администраторов и до 50 сотрудников</p>
                <br/>
                <Button size="lg" className="card--btn btn-primary">Попробовать</Button>
              </div>
            </div>


            <div className="card--corporation card text-center m-4">
              <div className="card-body">
                <h3 className="card-title">Корпорация</h3>
                <hr/>
                <p className="card-text">Включает в себя 10 администраторов и до 100 сотрудников</p>
                <br/>
                <Button size="lg" className="card--btn btn-primary">Попробовать</Button>
              </div>
            </div>
            </div>




        </div>
        <div className="landing--block" id="pricing">
          <h1>Внедрение</h1>
          <div className="integration">
            <div className="d-flex">
              <div className="introduction cardst group1 m-2">
                <h3>Настройка и Интеграция</h3>
                <hr/>
                <img className="image--cardst" src={settings} alt="" />
                <p>Мы обеспечим гладкую интеграцию с внутренними системами вашего предприятия.</p>
              </div>

              <div className="introduction cardst group2 m-2">
                <h3>Обучение администраторов</h3>
                <hr/>
                <img className="image--cardst" src={vr} alt="" />
                <p>Обучим ваших сотрудников основам администрирования и настройки системы.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="introduction cardst group2 m-2">
                <h3>Поставка VR-оборудования</h3>
                <hr/>
                <img className="image--cardst" src={teacher} alt="" />
                <p>Мы предлагаем высококачественное VR-оборудование по конкурентоспособным ценам.</p>
              </div>
              <div className="introduction cardst group1 m-2">
                <h3>Оптимизация рабочего процесса</h3>
                <hr/>
                <img className="image--cardst" src={engine} alt="" />
                <p>Мы гарантируем грамотную настройку и плавное внедрение, что позволит вашему предприятию оперативно воспользоваться всеми преимуществами новой обучающей платформы.</p>
              </div>
            </div>


          </div>
        </div>

        <div className="landing--block" id="feedback">
          <h1>Отзывы</h1>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sun9-21.userapi.com/impg/g421ga_0Br1zDcLO6LWiadgKsvYTMkwwHUfodw/EqE2h0LfQLE.jpg?size=1600x800&quality=96&sign=3f30d06a6e323551c0729293de6a5c93&type=album"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sun104-2.userapi.com/impg/3f9-aXJgEXQYmqzOOcc7SUgbq91KJ_ZqgxlSTQ/r1N7NFkB-s8.jpg?size=1600x800&quality=96&sign=1823e5701c64803bb97559fadb5463b9&type=album/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sun9-1.userapi.com/impg/JIrQ4yw1Cn1eozvGbCZ6jndr2Jfo-FU59zfx7w/lejEyBMfCrY.jpg?size=1600x800&quality=96&sign=161af92255280183d8e9c5025818fe4a&type=album/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    </div>
  )
}

export default LandingView;