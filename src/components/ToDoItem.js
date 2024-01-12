import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ToDoItem = (props) => {
  const { title, handleDelete, handleEdit } = props;
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6 className="text-black">{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={handleEdit}>
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default ToDoItem;
