import React, { useReducer } from "react";
import { reducer, task } from "../Reducers/Reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, task);
  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map(task => {
        return <Todo key={task.id} task={task} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
