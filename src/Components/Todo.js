import React from "react";
import { FontAwesomeIcon, Checkbox } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div
      className={`block p-3 px-6  ${
        task.completed
          ? ""
          : "bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      } `}
      onClick={() => toggleComplete(task.id)}
    >
      <div className="grid grid-flow-row-dense grid-cols-2">
        <p className="text-start">
          <span>
            <input
              type="checkbox"
              checked={task.completed ? "checked" : ""}
              className="me-2"
            />
          </span>
          {task.task}
        </p>
        <div className="ms-auto flex space-x-4">
          <button
            type="button"
            className="edit-icon"
            onClick={(e) => {
              e.stopPropagation();
              editTodo(task.id);
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            type="button"
            className="delete-icon"
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(task.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};
