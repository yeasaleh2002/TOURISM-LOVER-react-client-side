import React from 'react';
import './Register.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';




const Register = () => {

    
    const {signInUsingGoogle} = useAuth();


    // location
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    
    // handleGoogleLogIn function
  const handleGoogleLogIn = () => {
    signInUsingGoogle()
    .then(result => {
       history.push(redirect_uri)
    });
  }
 

    return (
        <div className="container text-center my-5">
               <h1 className="text-danger my-5">Tourism Lover Register Page</h1>
            <Container>
                <Row > 
                    <Col  className="register-form border  p-5" md={{ span: 6, offset: 3 }}>
                    <h1 className="mb-4">Register With</h1>
            <Button onClick={handleGoogleLogIn} className="mb-4 px-5 fs-5 rounded-pill"><i className=" fab fa-google"></i> Google</Button> <br/>
            <span className="fs-4">Already Account ? <Link className="text-danger text-decoration-none" to="/login">LogIn</Link></span> 
            </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;