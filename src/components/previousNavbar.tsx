import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export function PreviousNavbar() {
  const navigate = useNavigate();
  const handleBacktoPreviousPage = () => { navigate(-1) };

  return (
    <Navbar bg="light" variant="dark" sticky="top">
      <Container>
        <Button variant="primary" onClick={handleBacktoPreviousPage}>
          {"< Go Back to the Previous Page"}
        </Button>
      </Container>
    </Navbar>
  );
}
