import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// npx json-server --watch db.json --port 4040

const GetUser = () => {
  const [user, setUser] = useState([]);

  // Fetch users
  useEffect(() => {
    axios
      .get("http://localhost:4040/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let navigate = useNavigate();

  let addUser = () => {
    navigate("/add");
  };

  // =====================Delete==========================
  let deletes = (id) => {
    console.log(id);

    axios
      .delete(`http://localhost:4040/user/${id}`)
      .then(() => {
        //  after delete, fetch updated user list
        return axios.get("http://localhost:4040/user");
      })
      .then((response) => {
        setUser(response.data); //  now UI updates correctly
      })
      .catch((err) => console.log(err));
  };

  // delet by using filter()

  // let deletes = (id) => {
  //   console.log(id);

  //   axios
  //     .delete(`http://localhost:4040/user/${id}`)
  //     .then(() => {
  //       // remove deleted user from existing state
  //       setUser(user.filter((u) => u.id !== id));
  //     })
  //     .catch((err) => console.log(err));
  // };

  //=================Edit===================

  return (
    <div className="page-container">
      {/* <Link to="/add">
        <button>Add</button>
      </Link> */}

      {/* OR */}

      <button onClick={addUser} className="btn btn-add">
        <i className="fa-solid fa-user-plus icon"></i> Add
      </button>

      <table border={2} className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Operation</th>
          </tr>
        </thead>

        <tbody>
          {user.map((res, index) => (
            <tr className="table-row">
              {/* added index in incrementing order */}
              <td>{index + 1}</td>
              <td>{res.name}</td>
              <td>{res.username}</td>
              <td>{res.email}</td>
              <td>
                <button onClick={() => navigate(`/edit/${res.id}`)}>
                  Edit
                </button>
                <Link to={`/edit/${res.id}`}>
                  <button className="btn btn-edit">Edit</button>
                </Link>

                <button
                  className="btn btn-delete"
                  onClick={() => {
                    deletes(res.id);
                  }}
                >
                  Delete
                </button>
                  {/* Adding some effective css only */}
                <Link to={`/edit/${res.id}`}>
                  <button className="btn btn-edit">
                    <i className="fa-solid fa-pen-to-square icon"></i> Edit
                  </button>
                </Link>

                <button
                  className="btn btn-delete"
                  onClick={() => {
                    deletes(res.id);
                  }}
                >
                  <i className="fa-solid fa-trash icon"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUser;