import React from 'react'
import { useForm } from 'react-hook-form'
import { hashSync } from 'bcryptjs';
import './Register.css'
import { useNavigate } from 'react-router-dom';
function Register() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    let navigate=useNavigate()
    function handleFormSubmit(userObj){
        //hashpassword
        let hashedPassword=hashSync(userObj.password,5);
        userObj.password=hashedPassword
        fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userObj)
        })
        .then(res=>{
            if(res.status===201)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container'>
        <div className="">
            <p className='text-center text-info mt-2 p-1 fs-4'>User Registration Form</p>
            </div>
        <form className='w-50 mt-4 rounded-3 p-5 mx-auto border custom-form' onSubmit={handleSubmit(handleFormSubmit)}>
            
            <div className="mb-3">
                <label htmlFor="username" className='form-label text-white'>Username</label>
                <input type="text" {...register("username",{required:true})} id="username" className="custom-inputs form-control" />
                {errors.username?.type==='required' && <p className='text-warning'>Username is required</p>}
            </div>
            <div className="mb-3">
            <label htmlFor="email" className='form-label text-white'>Email</label>
                <input type="email" {...register("email",{required:true})} id="email" className="custom-inputs form-control" />
                {errors.email?.type==='required' && <p className='text-warning'>Email is required</p>}
            </div>
            <div className="mb-3">
            <label htmlFor="password" className='form-label text-white'>Password</label>
                <input type="password" {...register("password",{required:true})} id="password" className="custom-inputs form-control" />
                {errors.password?.type==='required' && <p className='text-warning'>Password is required</p>}
            </div>
            <div className="text-center">
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register