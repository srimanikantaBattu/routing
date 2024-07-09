import React from "react";
import { useForm } from "react-hook-form";
import { compareSync } from "bcryptjs";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  function handleFormSubmit(userObj) {
    fetch(`http://localhost:4000/users?username=${userObj.username}`, {
      method: "GET",
    })
      .then((res) =>
        res.json())
      .then((userObjArray) => {
        if (userObjArray.length === 0) alert("Invalid Username");
        else {
          let result = compareSync(userObj.password, userObjArray[0].password);
          console.log(result);
          if (result == true) navigate(`/user-dashboard/${userObj.username}`,{state:userObjArray[0]});
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <div className="">
        <p className="text-center text-info mt-2 p-1 fs-4">User Login Form</p>
      </div>
      <form
        className="w-50 mt-4 rounded-3 p-5 mx-auto border custom-form"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-white">
            Username
          </label>
          <input
            type="text"
            {...register("username", { required: true })}
            id="username"
            className="custom-inputs form-control"
          />
          {errors.username?.type === "required" && (
            <p className="text-warning">Enter Username</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            id="password"
            className="custom-inputs form-control"
          />
          {errors.password?.type === "required" && (
            <p className="text-warning">Enter Password</p>
          )}
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
