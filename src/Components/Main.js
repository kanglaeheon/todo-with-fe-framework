import { useState } from 'react';

import { DatePanel } from './DatePanel';
import { TodoList } from './TodoList';

export const Main = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);

  const handleCreateBtnClick = () => {
    setIsCreateMode(!isCreateMode);
  };

  return (
    <>
      <DatePanel />
      <TodoList
        handleCreateBtnClick={handleCreateBtnClick}
        isCreateMode={isCreateMode}
      ></TodoList>
    </>
  );
};
