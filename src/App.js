import "./App.css";
import React, { useState } from "react";
import ToDoThings from "./components/ToDoThings";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import todoList from "./images/todoList.png";

const App = () => {
  const state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  const [things, setThings] = useState(state);

  const handleChange = (event) => {
    setThings({
      ...things,
      item: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: things.id,
      item: things.item,
    };

    const updatedItems = [...things.items, newItem];
    setThings({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  const clearList = () => {
    setThings({
      items: [],
    });
  };

  const handleDelete = (id) => {
    const filterdItems = things.items.filter((item) => item.id !== id);
    setThings({
      items: filterdItems,
    });
  };

  const handleEdit = (id) => {
    const filterdItems = things.items.filter((item) => item.id !== id);
    const selectedItem = things.items.find((item) => item.id === id);

    setThings({
      items: filterdItems,
      item: selectedItem.item,
      editItem: true,
      id: id,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container d-flex justify-content-center">
          <h4 className="text-capitalize text-white"> to do list </h4>
        </div>
      </nav>
      <div style={{ display: "flex", height: "92.4vh" }}>
        <img
          src={todoList}
          alt="Todo List"
          style={{ maxWidth: "50%", overflow: "hidden" }}
        />
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                thing={things.item}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editItem={things.editItem}
              />
              <ToDoThings
                items={things.items}
                clear={clearList}
                deleteItem={handleDelete}
                editItem={handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
