import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { base_url } from '../Constants';
import { ToastContainer, Toast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { isAdministrator, setToken } from '../utils/tokenHelper';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});


function Login({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      navigate("/");
  
      try {
        await loginSchema.validate({ username, password });
        axios
          .post('https://localhost:7004/api/Accounts/login', {
            email: username,
            password: password,
          })
           .then((res) => {
               console.log(res);
               setToken(res.data.result);
               console.log("Logged Succesfully");
               if(isAdministrator())
               {
                console.log(isAdministrator());
                return navigate('/admin');
               }
            return navigate('/');
          })
            .catch((err) => {
               alert('login failed');
          });
      } catch (error) {
        toast.error(error.message);
      }
    };
  
    return (
      <>
        <Modal show={show} onHide={handleClose} bg="dark">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Enter your Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  autoFocus
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className='m-2 rounded' variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button   className='m-2 rounded' variant="primary " type="submit">
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <ToastContainer />
      </>
    );
  }
  
  export default Login;
  