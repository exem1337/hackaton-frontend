import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import styles from './Auth_style.module.scss'

const AuthView = () => {
   return (
      <Container className={`p-5 d-flex align-items-center ${styles.container}`}>
         <div>
            <Form className={`${styles.form_container} m-auto`} noValidate >
               <div className={"text-center"}><h5>Login</h5></div>
               <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                     // value={form.email}
                     onChange={(e) => {
                        // setField('email', e.target.value)
                     }}
                     required type="email"
                     placeholder="Enter email"
                     // isInvalid={!!errors['email']}
                     // isValid={stateErrors["email"]}
                  />
                  <Form.Control.Feedback type="invalid">
                     {/*{errors['email']}*/}
                  </Form.Control.Feedback>
               </Form.Group>

               <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     required
                     // isInvalid={!!errors['password']}
                     type="password"
                     onChange={(e) => {
                        // setField('password', e.target.value)
                     }}
                     placeholder="Password"
                     // value={form.password}
                     // isValid={stateErrors["password"]}
                  />
                  {/*<Form.Control.Feedback type="invalid">*/}
                  {/*   <Row><Col*/}
                  {/*      xs={7}>{errors['password']}</Col>{user.errors[0]?.attempt <= 3 && user.errors[0]?.attempt !== 0 ?*/}
                  {/*      <Col className={"text-end"}>Осталось попыток: {user.errors[0]?.attempt}</Col> : ""}</Row>*/}
                  {/*</Form.Control.Feedback>*/}
               </Form.Group>
               <Form.Group>
                  <Row>
                     <Col xs={5}>
                        <Form.Group className="mb-3">
                           <Form.Check type="checkbox" label="Не выходить"/>
                        </Form.Group>
                     </Col>
                     <Col xs={7} className={"d-flex justify-content-end"}>
                        <a className={`link-dark ${styles.pointer_a}`}><strong>Восстановить пароль</strong></a>
                     </Col>
                  </Row>
               </Form.Group>
               <Form.Group className="mb-3">
                  {/*<AuthButton errorsMasage={errors} setErrors={setErrors} setStateErrors={setStateErrors}/>*/}
               </Form.Group>
               <Form.Group className={"d-flex align-content-center justify-content-center"}>
                  <Form.Label>Нет аккаунта?</Form.Label> &nbsp; <a onClick={() => {
                  // setPanelAuthorization(false)
               }} className={`link-dark pe-auto ${styles.pointer_a}`}><strong>Зарегистрироваться</strong></a>
               </Form.Group>
            </Form>
         </div>
         {/*validated={!errors}
               onSubmit={handleSubmit}*/}

      </Container>
   );
}

export default AuthView;