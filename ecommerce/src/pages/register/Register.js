import React, { useState } from 'react';
import axios from "axios";
import *  as yup from "yup";
import  {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { base_url } from '../../Constants';
import {  useNavigate } from 'react-router-dom';
function Register() {

   const navigate =useNavigate();
 //State For Registration
   const [name,setName]=useState();
   const [email,setEmail]=useState();
   const[password,setPassword]=useState();

   const schema =yup.object().shape({
    name:yup.string().required("Name is required"),
    email:yup.string().email('email not valid  ').required("Email is Required"),
    password:yup.string().min(5).max(10).required(),
    confirm: yup.string().oneOf([yup.ref("password"), "password doesnt match"]).required("password is required")

   });

   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
   });

   const onSubmit = async values =>{
    console.log("data to be sent ");
    console.log(values.name);
    console.log(values.password);
    console.log(values.email);

    try {
        console.log("call reached here ");
       await  axios.post(`https://localhost:7004/api/Accounts/user/register`,{
            fname:`${values.name}`,
            password:`${values.password}`,
            email:`${values.email}`

        })
        .then((res)=>{
            console.log("Succesfully Registered");
            console.log(res);
            navigate('/');
        })
    } catch (error) {
        console.log(error);
    }
   }


    return (
        <div>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div
                            className="card text-black"
                            style={{ borderRadius: '25px' }}
                        >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Sign up
                                        </p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <label
                                                        className="form-label"
                                                        for="form3Example1c"
                                                    >
                                                        Your Name
                                                    </label>
                                                    <input
                                                        {...register("name")}
                                                        type="text"
                                                        name='name'
                                                        id="form3Example1c"
                                                        className="form-control"
                                                    />
                                                     {/* <p classNameName="text-danger">{errors.name ? errors.name.message : <></>}</p>        */}
                                                     <p>{errors.email?.message}</p>
                                                    
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <label
                                                        className="form-label"
                                                        for="form3Example3c"
                                                    >
                                                        Your Email
                                                    </label>
                                                    <input
                                                     {...register("email")}
                                                        name='email'
                                                        type="email"
                                                        id="form3Example3c"
                                                        className="form-control"
                                                    />
                                                      <p className="text-danger">{errors.email ? errors.email.message : <></>}</p>
                                                      
                                                   
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <label
                                                        className="form-label"
                                                        for="form3Example4c"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                     {...register("password")}
                                                        name='password'
                                                        type="password"
                                                        id="form3Example4c"
                                                        className="form-control"
                                                    />
                                                     <p>{errors.password?.message}</p>
                                                   
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                      {...register("confirm")} 
                                                        name='confirm'
                                                        type="password"
                                                        id="form3Example4cd"
                                                        className="form-control"
                                                    />
                                                    <p className="text-danger">{errors.confirm ? errors.confirm.message : <></>}</p>
                                                    <label
                                                        className="form-label"
                                                        for="form3Example4cd"
                                                    >
                                                        Repeat your password
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                            //    onClick={onSubmit()}
                                                    type="submit"
                                                    className="btn btn-primary btn-lg rounded"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            alt="Sampleimage"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;
