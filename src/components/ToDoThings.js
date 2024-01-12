import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoThings = ({ items, clear, deleteItem, editItem }) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items?.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            title={item.item}
            handleDelete={() => deleteItem(item.id)}
            handleEdit={() => editItem(item.id)}
          />
        );
      })}

      <button
        onClick={clear}
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
      >
        clear list
      </button>
    </ul>
  );
};

export default ToDoThings;
