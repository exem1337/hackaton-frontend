import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Validation } from "../validation/validation";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const SignupView = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    inn: "",
    orgName: "",
    orgAddress: "",
    phone: "",
    stay: false,
  });
  const [errors, setErrors] = useState({}); 
  const [stateErrors, setStateErrors] = useState({}); 
  const navigate = useNavigate();

  const setField = (field: string, value: string | boolean) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  async function handleSubmit(event) {
    const { formErrors, stateErr } = Validation.validateFormLogIn(form);
    event.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      await AuthService.login(form.email, form.password);
      navigate('/');
    }
    setStateErrors(stateErr);
  }

  return (
    <Container
      className={`p-5 d-flex align-items-center justify-content-center auth_container`}
    >
      <div className={"auth_container_div"}>
        <Form
          className={`m-auto`}
          noValidate
          validated={!errors}
          onSubmit={handleSubmit}
        >
          <div className={"text-center"}>
            <h5>Зарегистрироваться</h5>
          </div>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control
              value={form.email}
              onChange={(e) => {
                setField("email", e.target.value);
              }}
              required
              type="email"
              isInvalid={!!errors["email"]}
              isValid={stateErrors["email"]}
            />
            <Form.Control.Feedback type="invalid">
              {errors["email"]}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              required
              isInvalid={!!errors["password"]}
              type="password"
              onChange={(e) => {
                setField("password", e.target.value);
              }}
              value={form.password}
              isValid={stateErrors["password"]}
            />
            <Form.Control.Feedback type="invalid">
              <Row>
                <Col xs={7}>{errors["password"]}</Col>
              </Row>
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasicPhone">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              required
              isInvalid={!!errors["phone"]}
              type="text"
              onChange={(e) => {
                setField("phone", e.target.value);
              }}
              value={form.phone}
              isValid={stateErrors["phone"]}
            />
            <Form.Control.Feedback type="invalid">
              <Row>
                <Col xs={7}>{errors["phone"]}</Col>
              </Row>
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasiInn">
            <Form.Label>ИНН организации</Form.Label>
            <Form.Control
              required
              isInvalid={!!errors["inn"]}
              type="text"
              onChange={(e) => {
                setField("inn", e.target.value);
              }}
              value={form.inn}
              isValid={stateErrors["inn"]}
            />
            <Form.Control.Feedback type="invalid">
              <Row>
                <Col xs={7}>{errors["inn"]}</Col>
              </Row>
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasiorgName">
            <Form.Label>Название организации</Form.Label>
            <Form.Control
              required
              isInvalid={!!errors["orgName"]}
              type="text"
              onChange={(e) => {
                setField("orgName", e.target.value);
              }}
              value={form.inn}
              isValid={stateErrors["orgName"]}
            />
            <Form.Control.Feedback type="invalid">
              <Row>
                <Col xs={7}>{errors["orgName"]}</Col>
              </Row>
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasiorgAddress">
            <Form.Label>Название организации</Form.Label>
            <Form.Control
              required
              isInvalid={!!errors["orgAddress"]}
              type="text"
              onChange={(e) => {
                setField("orgAddress", e.target.value);
              }}
              value={form.inn}
              isValid={stateErrors["orgAddress"]}
            />
            <Form.Control.Feedback type="invalid">
              <Row>
                <Col xs={7}>{errors["orgAddress"]}</Col>
              </Row>
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Button
              variant={"outline-secondary"}
              type="submit"
              className={`w-100`}
              disabled={!form.email || !form.password}
            >
              Зарегистрироваться
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default SignupView;
