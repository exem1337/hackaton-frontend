import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>ПрофТестиум
                  </h6>
                  <p>
                    Единая платформа для обучения и тестирования сотрудников
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Разделы</h6>
                  <p>
                    <a href="#opportunity" className="text-reset">
                      Возможности
                    </a>
                  </p>
                  <p>
                    <a href="#features" className="text-reset">
                      Тарифы
                    </a>
                  </p>
                  <p>
                    <a href="#pricing" className="text-reset">
                      Внедрения
                    </a>
                  </p>
                  <p>
                    <a href="#feedback" className="text-reset">
                      Отзывы
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Политика</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Политика конфиденциальности
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">техподдержка</h6>

                  <button type="button" className="btn btn-light">
                    Заказ обратного звонка
                  </button>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Форма заявки</h6>
                  <label>
                    почта:
                    <input type="text" />
                  </label>

                  <label>
                    описание
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                    ></textarea>
                  </label>
                  <button type="submit" className="btn btn-light">
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4">© 2023 ПрофТестиум</div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
