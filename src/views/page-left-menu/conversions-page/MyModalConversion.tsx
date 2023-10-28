import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from "react-bootstrap";

const MyModalConversion = () => {
   const [form, setForm] = useState({
      title: "",
      nameHr: '',
   });

   return (
      <div>
         <FloatingLabel className={"mb-3"} controlId="floatingTextarea2" label="Описание">
            <Form.Control
               value={form.title}
               as="textarea"
               placeholder="Leave a comment here"
               style={{ height: '100px' }}
               onChange={(e)=>setForm({...form, ['title']: e.target.value})}
            />
         </FloatingLabel>
         <FloatingLabel className={"mb-3"} controlId="floatingSelect" label="HR">
            <Form.Select onChange={(e)=> {
               setForm({
                  ...form,
                  ['nameHr']: e.target.value,
               })
            }} aria-label="Floating label select example">
               <option value="Соловьев Н.А">Соловьев Н.А</option>
               <option value="Тишина Н.А">Тишина Н.А</option>
            </Form.Select>
         </FloatingLabel>
         <Button onClick={()=> console.log(form)}>Сохранить</Button>
      </div>
   );
};

export default MyModalConversion;