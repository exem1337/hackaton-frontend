import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";

interface IDepartmentCreateProps {
  createdFn?: () => Promise<void>;
}

const DepartmentCreate = ({ createdFn }: IDepartmentCreateProps) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const setField = (field: string, value: string | boolean) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const onCreateDepartment = async () => {

  }

  return (
    <div className="department-create">
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={form.email} onChange={(event) => setField("email", event.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" value={form.password} onChange={(event) => setField("password", event.target.value)} />
      </FloatingLabel>    
      <Button onClick={onCreateDepartment}>Создать подразделение</Button>
    </div>
  )
}