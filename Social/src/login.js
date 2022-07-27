import './App.css';
import './login.css';
import './wall.css';
import React from 'react';
import { Form, Row, Stack, Button, Col, Container } from 'react-bootstrap';
import userIcon from './images/user.png';
import socialMedia from './images/socialmedia.gif';
import {Link, useHistory} from "react-router-dom";

function Login() {
  return (
    <Container style={{height:"100vh"}}>
      <Row className="h-100">
        <Col lg={4} md={6} sm={12} className="m-auto">
          <div className='text-left'>
            <text className='headingClass'>Social Awareness</text>
          </div>
          <div className='text-center'>
            <img className='iconClass' src={userIcon} alt="icon"></img>
          </div>
          <div className="text-left">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="waha99922@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                  </Form.Group>
                <div className="text-left mt-3">
                  <Link to="wall">
                    <Button variant="primary btn-block" type="submit">
                      Login
                    </Button>
                  </Link>
                </div>
                <div className='text-left mt-3'>
                  <Link to="createAccount"> 
                      {/* <small className='passwordResetClass'>
                          Create Account
                      </small> */}
                      <Button variant="secondary btn-block" type="submit">
                          Sign up
                      </Button>
                  </Link>
                </div>
              </Form>
          </div>
        </Col>
        <Col lg={8} md={6} sm={12} className='mt-5'>
          <img className='socialImageClass' src={socialMedia} alt=""></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
