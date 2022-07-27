import './App.css';
import './login.css';
import React from 'react';
import { Nav, Navbar, Form, Row, Stack, Button, Col, Container } from 'react-bootstrap';
import userIcon from './images/user.png';
import socialMedia from './images/socialmedia.gif';
import {Link, useHistory} from "react-router-dom";

function Wall() {
  return (
    <>
    <Navbar sticky="top" className='navbarColour' variant="dark">
        <Container>
          <Navbar.Brand href="#home">Social Awareness</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a>Sheikh Wahab Mahmood</a>
                </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>  
      </Navbar>
      <Container style={{height:"100vh"}}>
      <Row className="h-100">
          <Col lg={4} md={6} sm={12} className="m-auto">
            <div>
              No posts to show
            </div>
          </Col>
        </Row>
      </Container>
      </>
  );
}

export default Wall;
