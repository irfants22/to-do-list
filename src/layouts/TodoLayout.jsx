import React from "react";
import Title from "../components/Title";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function TodoLayout({
  todos,
  handleAddTask,
  handleEditTask,
  handleDeleteTask,
}) {
  return (
    <div className="container mx-auto max-w-lg min-w-min h-[95%] max-h-[1024px] bg-slate-300 bg-main-bg bg-cover bg-center p-2 border-2 border-pink-200 rounded-lg">
      <Title></Title>
      <AddTask handleAddTask={handleAddTask}></AddTask>
      <TaskList
        todos={todos}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      ></TaskList>
    </div>
  );
}

export default TodoLayout;
