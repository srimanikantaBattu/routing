import React from 'react'
import { useForm } from 'react-hook-form'
import { hashSync } from 'bcryptjs';
function Signup() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    function handleFormSubmit(userObj){
        //hashpassword
        let hashedPassword=hashSync(userObj.password,5);
        userObj.password=hashedPassword
        fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userObj)
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='container'>
        <div className="">
            <p className='text-center text-dark mt-2 p-1 fs-4'>Registration Form</p>
            </div>
        <form className='w-50 mt-4 rounded-3 p-5 bg-light mx-auto border' onSubmit={handleSubmit(handleFormSubmit)}>
            
            <div className="mb-3">
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" {...register("username",{required:true})} id="username" className="form-control" />
                {errors.username?.type==='required' && <p className='text-danger'>Username is required</p>}
            </div>
            <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" {...register("email",{required:true})} id="email" className="form-control" />
                {errors.email?.type==='required' && <p className='text-danger'>Email is required</p>}
            </div>
            <div className="mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" {...register("password",{required:true})} id="password" className="form-control" />
                {errors.password?.type==='required' && <p className='text-danger'>Password is required</p>}
            </div>
            <div className="text-center">
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Signup