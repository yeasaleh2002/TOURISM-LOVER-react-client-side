import React from 'react';
import './Login.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="text-danger my-5">Tourism Lover Login Page</h1>
            <Container>
                <Row>
                    <Col  className="border login-form p-5" md={{ span: 6, offset: 3 }}>
                       <h2 className="mb-4">Login With</h2>
                       <Button  className="mb-4 px-5 fs-5 rounded-pill"><i className=" fab fa-google"></i> Google</Button> <br/>
                       <span className="fs-4">Don't have an account ? <Link className="text-danger text-decoration-none" to="/register">Create an account</Link></span>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Login;