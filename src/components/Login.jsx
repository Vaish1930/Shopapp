import React, { useState } from "react";
import './Login.css';

import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Login() {
   const[isPasswordVisible,setIsPasswordVisible]=useState(false);
   const [formState,setFormState] = useState({
     values:{
       email:"",
       password:"",
     },
     validities:{
       email:false,
       password:false,
     },
     isFromValid:false,
   });


    const onTextInputChange = (event) => {
    const { name, value } = event.target;
    const values = { ...formState.values, [name]: value };

    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValid = true;

    if (name === "email" && !emailRegExp.test(value)) {
      isValid = false;
    }

    if (name === "password" && value.length < 4) {
      isValid = false;
    }

    const validities = { ...formState.validities, [name]: isValid };

    let isFormValid = true;

    for (let key in validities) {
      isFormValid = isFormValid && validities[key];
    }

    setFormState((prevFormState) => ({
      ...prevFormState,
      values,
      validities,
      isFormValid,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Submitted");

  };


   
    return (
        
      <div className="login">
      <div className="login_container">
        <div className="form_title">
          <h1>Sign In</h1>
        </div>
        <form action="" className="form">
          <div className="input_wrapper">
            <div className="input_container">
              <PersonIcon className="icon_left" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                required
                onChange={onTextInputChange}
                value={formState.values.email}
              />
              {formState.validities.email && (
                <CheckCircleIcon className="icon_right check_icon" />
              )}
            </div>
            {!formState.validities.email && (
              <small className="error">Invalid Email</small>
            )}
          </div>
          <div className="input_wrapper">
            <div className="input_container">
              <LockIcon className="icon_left" />
              <input
                type={`${isPasswordVisible ? "text" : "password"}`}
                name="password"
                id="password"
                placeholder="Enter password"
                required
                onChange={onTextInputChange}
                value={formState.values.password}
              />
              <div
                className="icon_right"
                onClick={() => setIsPasswordVisible((prevState) => !prevState)}
              >
                {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            {!formState.validities.password && (
              <small className="error">Invalid Password</small>
            )}
          </div>
          <button className="login_button" type="submit" onClick={handleLogin}>
            Log In
          </button>
        </form>
        <div className="signup">Don't have an account? SignUp</div>
      </div>
    </div>
    )
}

export default Login;
