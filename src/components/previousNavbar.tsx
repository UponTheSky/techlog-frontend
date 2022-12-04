import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export function PreviousNavbar() {
  const navigate = useNavigate();
  const handleBacktoPreviousPage = () => { navigate(-1) };

  return (
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand onClick={handleBacktoPreviousPage}>
          {"< Go Back to the Previous Page"}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
