import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const initialValues = {
    fullname: "",
    username: "",
    country: "",
    mobile: "",
    email: "",
    password: "",
    referralid: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("values.referralid ", values.referralid);
    const api_key = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";

    if (values.fullname === "") {
      alert("please enter Fullname");
    } else if (values.username === "") {
      alert("please enter Username");
    } else if (values.country === "") {
      alert("please enter country");
    } else if (values.mobile === "") {
      alert("please enter mobile");
    } else if (values.email === "") {
      alert("please enter email");
    } else if (values.password === "") {
      alert("please enter password");
    } else if (values.referralid === "") {
      alert("please enter referralid");
    } else {
      const headers = {
        "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          api_key: api_key,
      }
    
      const body = 
        JSON.stringify ({
          full_name: values.fullname,
          username: values.username,
          country_row_id: values.country,
          mobile_number: values.mobile,
          email_id: values.email,
          password: values.password,
          referral_id: values.referralid,
        })
      
      axios.post("https://lobster-app-ddwng.ondigitalocean.app/user/register",  {
          headers: headers,
          body: body
        })

        .then((data) => {
          console.log("userRegister", data);
        });
      }
    }

  return (
    <div className="main-container">
      <div className="container1">
        <h2>Register</h2>
        <p>Create your company accounts</p>
      </div>
      <div className="cont2">
        <form className="form-wrapper" onSubmit={(e) => submitForm(e)}>
          <input
            type="text"
            placeholder="Full name*"
            className="register-form-input"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="User Name*"
            className="register-form-input"
            name="username"
            value={values.username}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Select Country*"
            className="register-form-input"
            name="country"
            value={values.country}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="number"
            placeholder="Mobile Number*"
            className="register-form-input"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Email ID*"
            className="register-form-input"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Password*"
            className="register-form-input"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="type"
            placeholder="Referral ID*"
            className="register-form-input"
            name="referralid"
            value={values.referralid}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <button type="submit" className="btn">
            Register
          </button>
          <br />
          <span className="regfont">
            If you have an account please <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
