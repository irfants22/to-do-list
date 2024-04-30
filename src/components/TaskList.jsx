import React, { useState } from "react";
import Button from "./Button";

function TaskList({ todos, handleEditTask, handleDeleteTask }) {
  return (
    <div className="h-[75%] max-h-full p-2">
      <ul className="max-h-full px-2 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-300">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-3">
            <Task
              todo={todo}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({ todo, handleEditTask, handleDeleteTask }) {
  const [isEditable, setIsEditable] = useState(false);

  if (isEditable) {
    return (
      <div className="tasklist">
        <div className="tasklist-child">
          <input type="checkbox" disabled={true} className="my-checkbox" />
          <input
            type="text"
            value={todo.task}
            className="input-field animate-blink"
            onChange={(e) => handleEditTask({ ...todo, task: e.target.value })}
          />
        </div>
        <div className="tasklist-child">
          <Button
            src="/src/assets/icons/check.png"
            onClick={() => setIsEditable(false)}
          />
          <Button
            src="/src/assets/icons/trash.png"
            disabled={true}
            backgroundColor="bg-pink-800"
            onClick={() => handleDeleteTask(todo.id)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="tasklist">
        <div className="tasklist-child">
          <input
            type="checkbox"
            className="my-checkbox"
            onChange={(e) =>
              handleEditTask({ ...todo, done: e.target.checked })
            }
          />
          <label
            className={`font-truculenta font-medium text-base ${
              todo.done === true ? "line-through italic" : "no-underline"
            }`}
          >
            {todo.task}
          </label>
        </div>
        <div className="tasklist-child">
          <Button
            src="/src/assets/icons/pencil.png"
            onClick={() => {
              todo.done === true
                ? alert("The task has been done!")
                : setIsEditable(true);
            }}
          />
          <Button
            src="/src/assets/icons/trash.png"
            onClick={() => handleDeleteTask(todo.id)}
          />
        </div>
      </div>
    );
  }
}

export default TaskList;
