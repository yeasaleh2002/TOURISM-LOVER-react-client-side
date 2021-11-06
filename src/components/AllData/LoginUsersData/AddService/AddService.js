import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {


   /* useForm state declare */
    const { register, handleSubmit, reset } = useForm();

    /* onSubmit handle declare */
    const onSubmit = data => {
        console.log(data);
        axios.post('https://desolate-fortress-05887.herokuapp.com/services', data )
        .then(res => {
            if(res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }


    return (
    <div className="add-service">
        <div className="container my-5 w-50">
            <h1 className="text-center text-secondary">Please Add A Service</h1>
          
          {/* add service form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("picture")} placeholder="Service Image Link"/>
                <input {...register("name", { required: true, maxLength: 40 })} placeholder="Service Name" />
                <input type="number" {...register("index")} placeholder="Service Package key"/>
                <input type="number" {...register("balance")} placeholder="Service Booking Fee"/>
                <input type="number" {...register("packageDays")} placeholder="Service Booking days"/>
                <input {...register("email")} placeholder="Your Email" />
                <input type="number" {...register("phone")} placeholder="Enter Your phone number"/>
                <input {...register("address")} placeholder="Enter Your Address" />
                <textarea {...register("about")} placeholder=" Service short Details"/>
                <textarea {...register("about2")} placeholder=" Service full Details"/>
                
                <input type="submit" />
            </form>

        </div>
      </div>
    );
};

export default AddService;