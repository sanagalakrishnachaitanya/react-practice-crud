import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate(); // it is used to navigate to the particular page
  const { id } = useParams(); // extract data from url

  const [value, setValue] = useState({
    name: "",
    username: "",
    email: "",
  });

  // Fetch existing user data
  useEffect(() => {
    axios
      .get(`http://localhost:4040/user/${id}`)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // set the value by using sate
  const updateValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // after fetching and updating value send it agian to the home page
  const sendUserdata = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4040/user/${id}`, value)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container">
      {/* in place of onClick() on button we can use onSubmit() in form  */}
      <form onSubmit={sendUserdata} className="form-box">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={value.name}
          onChange={updateValue} // onChange wil
          className="form-input"
        />

        <input
          type="text"
          placeholder="username"
          name="username"
          value={value.username}
          onChange={updateValue}
          className="form-input"
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={value.email}
          onChange={updateValue}
          className="form-input"
        />

        <button className="btn btn-submit">
          <i className="fa-solid fa-floppy-disk icon"></i> Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;