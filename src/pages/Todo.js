import React from "react";
import Todos from "../component/todo/Todos";
import AddForm from "../component/todo/AddForm";
import TodoList from "../component/todo/TodoList";

const Todo = (props) => {
  return (
    <>
      <h3>투두 페이지</h3>
      <TodoList>
        <AddForm />
        <Todos />
      </TodoList>
    </>
  );
};

export default Todo;
