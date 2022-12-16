import styled from "styled-components";
import { useState, useRef } from "react";
import axios from "axios";

export const TodoCreateInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TodoCreateInputLabel = styled.label`
  width: 40px;
  margin-left: 5px;
  background-color: white;
  text-align: center;
  color: #434343;
`;

export const TodoCreateInputElement = styled.input`
  width: 300px;
  height: 2rem;
  background-color: white;
  border: none;
  border-bottom: 2px solid #434343;
  padding: 0 0 5px 5px;
  outline: none;
`;

export const TodoCreateInputSubmitBtn = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 10px;
  border: none;
  background-color: moccasin;
`;

export const CreateTodoInput = ({ handleCreateBtnClick, renderTodos }) => {
  const [textCreateInput, setTextCreateInput] = useState("");
  const elementCreateInput = useRef(null);

  const handleCreateInputChange = (e) => {
    setTextCreateInput(e.target.value);
  };

  const handleCreateInputSubmit = () => {
    const newDate = new Date();
    const today = `${newDate.getFullYear()}. ${
      newDate.getMonth() + 1
    }. ${newDate.getDate()}`;
    axios({
      method: "post",
      url: "http://localhost:3001/todos",
      data: {
        content: textCreateInput,
        done: false,
        date: today,
      },
    })
      .then(() => {
        elementCreateInput.current.value = "";
        handleCreateBtnClick();
        renderTodos();
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  };

  const handleOnEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateInputSubmit();
    }
  };

  return (
    <TodoCreateInputContainer>
      <TodoCreateInputLabel htmlFor="todo_input">Todo</TodoCreateInputLabel>
      <TodoCreateInputElement
        type="text"
        id="todo_input"
        placeholder="할 일을 입력하세요."
        maxLength={20}
        ref={elementCreateInput}
        onChange={(e) => {
          handleCreateInputChange(e);
        }}
        onKeyUp={handleOnEnterKeyPress}
      />
      <TodoCreateInputSubmitBtn onClick={handleCreateInputSubmit}>
        +
      </TodoCreateInputSubmitBtn>
    </TodoCreateInputContainer>
  );
};
