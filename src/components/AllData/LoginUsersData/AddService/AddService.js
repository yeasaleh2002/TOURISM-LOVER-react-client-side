import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
    <div className="add-service">
        <div className="container my-5 w-50">
            <h1 className="text-center text-secondary">Please Add A Service</h1>
          
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("image")} placeholder="Service Image Link"/>
                <input {...register("name", { required: true, maxLength: 40 })} placeholder="Service Name" />
                <input type="number" {...register(" package-key")} placeholder="Service Package key"/>
                <input type="number" {...register("price")} placeholder="Service Booking Fee"/>
                <input type="number" {...register("package-days")} placeholder="Service Booking days"/>
                <textarea {...register("shortDescription")} placeholder="Service Details"/>
                
                <input type="submit" />
            </form>

        </div>
      </div>
    );
};

export default AddService;