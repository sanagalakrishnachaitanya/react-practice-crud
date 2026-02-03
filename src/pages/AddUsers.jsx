import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  let [value, setvalue] = useState({ name: "", username: "", email: "" });

  let updateValue = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);

  let sendUserdata = (e) => {
    // it prevent from page reloading
    e.preventDefault();
    axios
      .post("http://localhost:4040/user", value)
      .then(() => navigate("/")) // used to navigate to the userHome page
      .catch((err) => console.log(err));
  };

  //needToStudy-- spread and rest operator
  return (
    <div className="page-container">
      {/* in place of onclick we can use onSubmit() it work same as onClick */}
      <form action="" onSubmit={sendUserdata} className="form-box">
        <tr>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={updateValue}
            value={value.name}
            className="form-input"
          />
        </tr>
        <tr>
          <input
            type="text" placeholder="username"
            name="username"
            onChange={updateValue}
            value={value.username}
            className="form-input"
          />
        </tr>
        <tr>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={updateValue}
            value={value.email}
            className="form-input"
          />
        </tr>
        <tr>
          {/*  in place of onClick i used onSubmit() attribute in form tag */}
          <button className="btn btn-submit" /*</tr>onClick={sendUserdata}*/>
            <i className="fa-solid fa-circle-plus icon"></i> Add
          </button>
        </tr>
      </form>
    </div>
  );
};

export default AddUser;