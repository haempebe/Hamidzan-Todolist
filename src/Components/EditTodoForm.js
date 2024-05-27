import React, { useState } from "react";
import { Button, FloatingLabel } from "flowbite-react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <div className="grid grid-flow-row-dense grid-cols-4 mt-3">
        <div className="col-span-3">
          <FloatingLabel
            variant="outlined"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="todo-input"
            placeholder="Update task"
          />
        </div>
        <div className="ml-3 me-3">
          <Button className="w-full ml-2 mt-1" type="submit">
            Ubah
          </Button>
        </div>
      </div>
    </form>
  );
};
