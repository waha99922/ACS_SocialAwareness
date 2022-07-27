import React from "react";
import { Form, Row, Stack, Button, Col, Container } from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import './createAccount.css';

function CreateAccount(){
    return(
        <Container style={{height:"100vh"}}>
            <Row className="h-100">
                <Col lg={4} md={6} sm={12} className="m-auto">
                <div className='text-left'>
                    <text className='headingClass'>Create Account</text>
                </div>
                <div className="text-left mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Sheikh Wahab Mahmood" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="waha99922@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                        </Form.Group>
                    <Button variant="primary btn-block" type="submit">
                        Submit
                    </Button>
                    <div className='text-left mt-3'>
                        <Link to="/"> 
                            <small className='alreadyHaveAccountResetClass'>
                                Already have account?
                            </small>
                        </Link>
                    </div>
                </Form>
                </div>
                
                </Col>
                <Col lg={8} md={6} sm={12} className='d-flex justify-content-center align-items-center' >
                    <div className="quoteClass">"Indulge yourself in world of communication"
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateAccount;