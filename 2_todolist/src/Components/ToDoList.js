import React, { useState } from "react";

function ToDoList() {
  const [val, setVal] = useState("");
  const [todo, setToDo] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setVal(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setToDo([...todo, val]);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setToDo(
      todo.filter((value, index) => {
        return index !== parseInt(e.target.value);
      })
    );
  };

  return (
    <>
      <form>
        <label for="input1">Enter:</label>
        <br />
        <input name="todo" placeholder="Add To-Do" onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </form>

      {todo.length === 0 && <h2>ToDoList is Empty</h2>}
      {todo.length !== 0 && <h2>My ToDoList</h2>}

      <ul>
        {todo.map((item, index) => {
          return (
            <>
              <li>
                {item + " "}
                <button value={index} onClick={handleDelete}>
                  {" "}
                  -{" "}
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
