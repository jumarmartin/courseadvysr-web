import React from 'react';
import './App.scss';
import { Link } from "react-router-dom";
import {Button, Row, Container, Card} from "react-bootstrap"

function App() {


  return (
    <Container variant="primary" className="splash-container">
      <Row>
        <Card bg={'dark'} text={'light'} style={{width: '24rem'}}className="mb-2">
          <Card.Header> Coursevysr Technology Preview</Card.Header>
          <Card.Body className="text-center">
            <Card.Text>Coursevysr seeks to revolutionize your relationship with everything course related at Elon University.</Card.Text>
            <Card.Text>This service requires an active Elon University account to access.</Card.Text>
            <Button href="/courses/" variant="primary">Log In with Elon IdP</Button>
           
          </Card.Body>

        </Card>
      </Row>
    </Container>
  );
}

export default App;