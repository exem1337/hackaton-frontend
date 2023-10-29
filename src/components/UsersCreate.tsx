import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import api from '../http'
import { UserApiService } from '../service/UserApiService';

const UsersCreate = () => {
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

  const onCreateUser = async () => {
    const result = (await api.post<{ id: number }>('/users/createUser', {
      ...form
    })).data;

    await api.post('/users/defineRole', {
      userId: result.id,
      roleId: 2
    })
  }

  return (
    <div className="user-create">
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
      <Button onClick={onCreateUser}>Создать</Button>
    </div>
  )
}

export default UsersCreate;