import React from "react";

const Todo = ({ task, dispatch }) => {
  const showDone = e => {
    e.preventDefault();
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: task.id
    });
  };

  return (
    <div
      className={`task$(task.completed ? "completed"): ""`}
      onClick={showDone}
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      <p>{task.item}</p>
    </div>
  );
}

export default Todo;
