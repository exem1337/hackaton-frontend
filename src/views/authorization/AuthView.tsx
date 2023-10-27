import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Validation} from "../../validation/validation";
import user from "../../store/User";

const AuthView = () => {
   const [form, setForm] = useState({
      email: '', password: '', stay: false
   });
   const [errors, setErrors] = useState({})// поле и string
   const [stateErrors, setStateErrors] = useState({}) // поле и bool
   const setField = (field: string, value: string | boolean)=>{
      setForm({
         ...form,
         [field]: value
      })
      if(!!errors[field]){
         setErrors({
            ...errors,
            [field]: null
         })
      }
   }

   async function handleSubmit(event) {
      const {formErrors, stateErr} = Validation.validateFormLogIn(form);
      event.preventDefault();
      if(Object.keys(formErrors).length > 0){
         setErrors(formErrors)
      } else {
         await user.login(form)
      }
      setStateErrors(stateErr)
   }

   return (
      <Container className={`p-5 d-flex align-items-center justify-content-center auth_container`}>
         <div className={'auth_container_div'}>
            <Form className={`m-auto`} noValidate validated={!errors} onSubmit={handleSubmit}>
               <div className={"text-center"}><h5>Login</h5></div>
               <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                     value={form.email}
                     onChange={(e) => {
                        setField('email', e.target.value)
                     }}
                     required
                     type="email"
                     placeholder="Enter email"
                     isInvalid={!!errors['email']}
                     isValid={stateErrors["email"]}
                  />
                  <Form.Control.Feedback type="invalid">
                     {errors['email']}
                  </Form.Control.Feedback>
               </Form.Group>

               <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     required
                     isInvalid={!!errors['password']}
                     type="password"
                     onChange={(e) => {
                        setField('password', e.target.value)
                     }}
                     placeholder="Password"
                     value={form.password}
                     isValid={stateErrors["password"]}
                  />
                  <Form.Control.Feedback type="invalid">
                     <Row><Col xs={7}>{errors['password']}</Col></Row>
                  </Form.Control.Feedback>
               </Form.Group>
               <Form.Group>
                  <Row>
                     <Col xs={5}>
                        <Form.Group className="mb-3">
                           <Form.Check type="checkbox" checked={form.stay} onChange={(e) => {
                              setField('stay', e.target.checked)
                           }} label="Не выходить" className={'auth_point_check'}/>
                        </Form.Group>
                     </Col>
                     <Col xs={7} className={"d-flex justify-content-end"}>
                        <a className={`link-dark auth_point`}><strong>Восстановить пароль</strong></a>
                     </Col>
                  </Row>
               </Form.Group>
               <Form.Group className="mb-3">
                  <Button variant={"outline-secondary"} type="submit" className={`w-100`} >
                     Войти
                  </Button>
               </Form.Group>
            </Form>
         </div>
      </Container>
   );
}

export default AuthView;