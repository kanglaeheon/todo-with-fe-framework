import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export const TodoContainer = styled.div`
  width: 450px;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid #434343;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TodoCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const TodoContent = styled.div`
  width: 300px;
  background-color: white;
  font-size: 1rem;

  &.done {
    text-decoration: line-through;
    color: lightblue;
  }
`;

export const TodoDate = styled.div`
  width: 300px;
  background-color: white;
  font-size: 1rem;

  &.done {
    text-decoration: line-through;
    color: lightblue;
  }
`;

export const TodoUpdateBtn = styled.button`
  background-color: white;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid #ffd177;
  color: #434343;
`;

export const TodoUpdateInput = styled.input`
  width: 100%;
  background-color: white;
  color: #434343;
`;

export const TodoUpdateSubmit = styled.button`
  background-color: white;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid #ffd177;
  color: #434343;
`;

export const TodoDeleteBtn = styled.button`
  background-color: white;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid #ffd177;
  color: #434343;
`;

const handleTodoCheckboxClick = (
  id,
  done,
  isUpdateMode,
  setIsUpdateMode,
  renderTodos
) => {
  axios({
    method: "patch",
    url: `http://localhost:3001/todos/${id}`,
    data: {
      done: !done,
    },
  })
    .then(() => {
      setIsUpdateMode(!isUpdateMode);
      renderTodos();
    })
    .catch((err) => console.error("ERROR: ", err));
};

const handleUpdateSubmitBtnClick = (
  id,
  content,
  isUpdateMode,
  setIsUpdateMode,
  renderTodos
) => {
  axios({
    method: "patch",
    url: `http://localhost:3001/todos/${id}`,
    data: {
      content: content,
    },
  })
    .then(() => {
      setIsUpdateMode(!isUpdateMode);
      renderTodos();
    })
    .catch((err) => console.error("ERROR: ", err));
};

const handleTodoDeleteBtnClick = (id, renderTodos) => {
  axios
    .delete(`http://localhost:3001/todos/${id}`)
    .then(() => {
      renderTodos();
    })
    .catch((err) => {
      console.error("ERROR: ", err);
    });
};

export const Todo = ({ todo, renderTodos }) => {
  const { id, content, done, date } = todo;
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [textUpdateInput, setTextUpdateInput] = useState(content);

  const handleTextUpdateInputChange = (e) => {
    setTextUpdateInput(e.target.value);
  };

  const handleOnKeyPressUpdateForm = (e) => {
    if (e.key === "Enter") {
      handleUpdateSubmitBtnClick(
        id,
        content,
        isUpdateMode,
        setIsUpdateMode,
        renderTodos
      );
    }
  };

  const handleTodoUpdateBtnClick = () => {
    setIsUpdateMode(!isUpdateMode);
  };

  return (
    <TodoContainer>
      <TodoCheckbox
        type="checkbox"
        checked={done}
        onChange={() => {
          handleTodoCheckboxClick(id, done, renderTodos);
        }}
      ></TodoCheckbox>
      {isUpdateMode ? (
        <>
          <TodoUpdateInput
            type="text"
            value={textUpdateInput}
            onChange={(e) => {
              handleTextUpdateInputChange(e);
            }}
            onKeyUp={(e) => {
              handleOnKeyPressUpdateForm(e);
            }}
          />
          <TodoUpdateSubmit
            onClick={() => {
              handleUpdateSubmitBtnClick(
                id,
                textUpdateInput,
                isUpdateMode,
                setIsUpdateMode,
                renderTodos
              );
            }}
          >
            V
          </TodoUpdateSubmit>
        </>
      ) : (
        <TodoContent className={`${done ? "done" : ""}`}>{content}</TodoContent>
      )}
      {!isUpdateMode && (
        <TodoDate className={`${done ? "done" : ""}`}>{date}</TodoDate>
      )}
      <TodoUpdateBtn onClick={handleTodoUpdateBtnClick}>U</TodoUpdateBtn>
      <TodoDeleteBtn onClick={() => handleTodoDeleteBtnClick(id, renderTodos)}>
        D
      </TodoDeleteBtn>
    </TodoContainer>
  );
};
