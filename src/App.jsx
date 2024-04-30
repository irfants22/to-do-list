import { useState } from "react";
import TodoLayout from "./layouts/TodoLayout";

let ID = 1;

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTask(newTask) {
    newTask === ""
      ? alert("Please enter a new task!")
      : setTodos([
          ...todos,
          {
            id: ID++,
            task: newTask,
            done: false,
          },
        ]);
  }

  function handleEditTask(editedTodo) {
    setTodos(
      todos.map((todo) => {
        return todo.id === editedTodo.id ? editedTodo : todo;
      })
    );
  }

  function handleDeleteTask(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div className="container mx-auto flex items-center w-full h-screen bg-slate-300 bg-second-bg bg-cover bg-center">
        <TodoLayout
          todos={todos}
          handleEditTask={handleEditTask}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        ></TodoLayout>
      </div>
    </>
  );
}

export default App;
