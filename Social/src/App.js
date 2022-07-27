import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form, Row, Stack, Button, Col, Container } from 'react-bootstrap';
import userIcon from './images/user.png';
import socialMedia from './images/socialmedia.gif';
import {Routes, Route} from "react-router-dom"
import Login from "./login"
import CreateAccount from "./createAccount"
import Wall from "./wall"
import Test from "./test"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="createAccount" element={<CreateAccount/>}/>
        <Route path="wall" element={<Wall/>}/>
        <Route path="test" element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
