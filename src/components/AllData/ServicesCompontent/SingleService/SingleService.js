import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const SingleService = () => {

    const {user} = useAuth();

    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

   // load data
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
          .then(res => res.json())
        
          .then(data => setServiceDetails(data));
      }, []);


   // find data
    useEffect(() => {
        const foundService = serviceDetails.find(
       
          (service) => service._id === serviceId
        );
        setSingleService(foundService);
      }, [serviceDetails]);
 


    return (
        <div>
            <h2 className="text-center text-info p-5"> Service Id:  {serviceId}</h2>


                <div className="container mb-5">


                    {/* card from react bootstrap */}
                <Card>

                    {/*  single service image */}
                    <div >
                    <Card.Img className=" h-100 w-100 " variant="top" src={singleService?.picture} />
                    </div>

                    {/*single service card body */}
                    <Card.Body className="bg-light">

                        {/*single Package name */}
                    <Card.Title><h3 className="text-primary">Package Name : {singleService?.name}</h3></Card.Title>

                        {/*single Package Id */}
                    <Card.Title><h3 className="text-danger">Package Id : {singleService?.index}</h3></Card.Title>

                        {/*single Package Fees */}
                    <Card.Title><h3 className="text-primary">Package Fees : ${singleService?.balance}</h3></Card.Title>

                        {/*single Package Days */}
                    <Card.Title><h3 className="text-secondary">Package Days : {singleService?.packageDays}</h3></Card.Title>

                    {/*single service email */}
                    <Card.Title><h4 className="text-warning">Email : {singleService?.email}</h4></Card.Title>

                    {/*single service Phone */}
                    <Card.Title><h4 className="text-info">Phone : {singleService?.phone}</h4></Card.Title>

                    {/*single service address */}
                    <Card.Title><h4 className="text-danger">Address : {singleService?.address}</h4></Card.Title>

                    {/* single service description  */}
                    <Card.Text className="bg-info text-light p-2 ">
                    {singleService?.about2}
                    </Card.Text>

                    </Card.Body>
                </Card>
                </div>


  b   <div className="container my-5 w-75">
            <h1 className="text-success pb-5 text-center"> Shipping Address </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control defaultValue={user.displayName} /> <br />
                    <Form.Control  /> <br />
                    <Form.Control required type="email"  defaultValue={user.email} /> <br />
                    <Form.Control placeholder="Mobile Number" /> <br />
                    <Form.Control placeholder="Shipping Address" /> <br />
                </Form.Group>
                <Button  variant="dark"> Confirm Order </Button>
            </Form>
        </div>


        </div>
    );
};

export default SingleService;