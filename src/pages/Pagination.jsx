import React, { useEffect, useState } from "react";


const Pagination = () => {
  const [users, setUsers] = useState([]);
  const recordsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / recordsPerPage);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const getCurrentRecords = () => {
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;
    return users.slice(firstIndex, lastIndex);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="page-container">
      <h2>📄 Comments List</h2>

      <table className="animated-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody key={currentPage}>
          {getCurrentRecords().map((res) => (
            <tr className="row-animate" key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ⬅ Prev
        </button>

        <span>
          Page <b>{currentPage}</b> of <b>{totalPages}</b>
        </span>

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Pagination;
