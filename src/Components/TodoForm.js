import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItemName] = useState("");

  const handleChanges = e => {
    setItemName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: item });
    setItemName("");
  };

  const clearFinished = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form className="todo-form">
        <input
          id="task"
          type="text"
          name="task"
          value={item}
          onChange={handleChanges}
        />
        <button onClick={handleSubmit}>Add</button>
        <div>
          <button onClick={clearFinished}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
