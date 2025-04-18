import React from "react";

const Login = () => {
  return (
    <>
      <h1 className="text-center">Login Form</h1>
      <form className="text-center my-5">
        <div className="row">
          <div className="col">
          <label htmlFor="email">Email:</label>
          <input type="email" name="mail" id="mail" />
          </div>
         <div className="col">
         <label htmlFor="password">Password:</label>
         <input type="password" />
         </div>
          
        </div>
      </form>
    </>
  );
};

export default Login;
