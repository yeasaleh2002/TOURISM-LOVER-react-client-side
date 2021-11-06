import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    
// useState declare
const [services, setServices ] = useState([]);


// data load from database
 useEffect(() => {
      fetch(`http://localhost:5000/services`)
      .then(response => response.json())
      .then(data => setServices(data))
 }, [])


    return (
        <div className="services-style ">
             <div className="container ">
                <h1 className=" text-center text-info my-5"> Our Services Offers </h1>


                {/* map services for getting all services offers */}
                    <Row xs={1} md={2} lg={3} className="g-4"  >
                        
                        {
                            services.map(tourismService => <Service
                            key = {tourismService._id}
                            service = {tourismService}                            
                            >
                            </Service>) 
                        }
                    </Row>
                </div>
        </div>
    );
};

export default Services;