import styled from "styled-components";
import { CreateTodoInput } from "./CreateTodoInput";

export const TodoCreateContainer = styled.div``;

export const TodoCreateInput = styled.div``;

export const TodoCreateBtn = styled.button`
  width: 450px;
  height: 40px;
  background-color: #434343;
  border: 2px solid #434343;
  font-size: 1rem;
  font-weight: 700;
  color: white;
`;

export const CreateTodo = ({
  handleCreateBtnClick,
  isCreateMode,
  renderTodos,
}) => {
  return (
    <TodoCreateContainer>
      {isCreateMode && (
        <CreateTodoInput
          handleCreateBtnClick={handleCreateBtnClick}
          renderTodos={renderTodos}
        />
      )}
      <TodoCreateBtn onClick={handleCreateBtnClick}>
        할 일 추가하기
      </TodoCreateBtn>
    </TodoCreateContainer>
  );
};
