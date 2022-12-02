import React, { ChangeEvent, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function AdminLoginPage() {
  const [userId, setUserId] = useState<string>('user ID');
  const [password, setPassword] = useState<string>('password')

  const handleSetEvent = (
    setFunction: (typeof setUserId| typeof setPassword)
  ) => (event: ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value);
  }

  return (
    <Form className="col-md-3 mx-auto pt-5">
      <h2 className="py-3">Admin Login Page</h2>
      <Form.Group controlId="Admin.login.userId" className="pb-3">
        <Form.Label>Enter your ID: </Form.Label>
        <Form.Control placeholder={userId} onChange={handleSetEvent(setUserId)} />
      </Form.Group>
      <Form.Group controlId="Admin.login.password" className="pb-3">
        <Form.Label>Enter your passsword: </Form.Label>
        <Form.Control placeholder={password} onChange={handleSetEvent(setPassword)} />
      </Form.Group>
      <Button variant="success" className="col-md-3 mx-auto" onClick={() => {}}>Login</Button>
    </Form>
  );
}
