import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TodoInput = ({ thing, handleChange, handleSubmit, editItem }) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group  align-items-center">
          <div className="input-group-prepend">
            <div
              className="input-group-text bg-primary"
              style={{ marginRight: "0.5rem" }}
            >
              <i className="fas fa-add text-white" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo thing"
            value={thing}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-success mt-3 w-100"
              : "btn btn-block btn-primary mt-3 w-100"
          }
        >
          {editItem ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
