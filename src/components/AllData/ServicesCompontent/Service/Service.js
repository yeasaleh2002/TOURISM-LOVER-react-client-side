import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {


    
    // destructring   
  const  {_id,index, picture,balance, name, about, packageDays } = props?.service || {}


    return (
        <Col>
        
        {/*trip  card from react bootstrap */}

        <Card className="trip-card">

               {/*service image */}
               <div>
               <Card.Img className=" w-100 h-100 rounded" variant="top" src={picture} />
               </div>

               {/*service Name dynamic */}
               <Card.Body>
               <Card.Title><h3>{name}</h3></Card.Title>
             
               <Card.Title className="text-primary"><h5> Package Key: {index + 1001} </h5></Card.Title>

               <Card.Title  className="text-success"><h5>Booking Fee: ${balance}</h5></Card.Title>
               
               <Card.Title className="text-danger"><h5>Booking Days: {packageDays}</h5></Card.Title>
               


               {/*service small description(about)  */}
               
               <Card.Text>
               {about.slice(0, 238)}.
               </Card.Text>

              
                           
               <span className=" d-flex align-items-center justify-content-center">
             
               {/* single service details  */}
               <Link  to={`/singleService/${_id}`}>
               <button className="btn btn-info text-light book-now-button fs-5"> Book Now </button>
               </Link>
               </span>


               </Card.Body>
               </Card>
                       
       </Col>
    );
};

export default Service;