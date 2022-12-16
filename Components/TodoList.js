import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { Todo } from "./Todo";
import { CreateTodo } from "../FeatureComponents/CreateTodo";

export const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodoListContents = styled.div`
  width: 500px;
  height: 550px;
  border: 2px solid royalblue;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const TodoList = ({ handleCreateBtnClick, isCreateMode }) => {
  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    axios.get("http://localhost:3001/todos").then((res) => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    renderTodos();
  }, []);

  return (
    <TodoListContainer>
      <TodoListContents>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} renderTodos={renderTodos} />;
        })}
        <CreateTodo
          handleCreateBtnClick={handleCreateBtnClick}
          isCreateMode={isCreateMode}
          renderTodos={renderTodos}
        />
      </TodoListContents>
    </TodoListContainer>
  );
};
