import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Pagination.css";

export default function Pagination() {
  const { post, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTodos, setPaginationTodos] = useState([]);

  let pageSize = 10;
  let pageNumbers;
  const pageCount = Math.ceil(post.length / pageSize);
  pageNumbers = Array.from(Array(pageCount).keys());

  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodo = post.slice(startIndex, endIndex);
    setPaginationTodos(allShownTodo);
  }, [post, currentPage]);

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="pagination-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading... :))</div>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginationTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>
                <p
                  className={
                    todo.completed ? "btn btn-success" : "btn btn-danger"
                  }
                >
                  {todo.completed ? "Completed" : "Pending"}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li
              style={{ cursor: "pointer" }}
              className={
                pageNumber + 1 === currentPage
                  ? "page-item active"
                  : "page-item"
              }
              aria-current="page"
              key={pageNumber + 1}
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
