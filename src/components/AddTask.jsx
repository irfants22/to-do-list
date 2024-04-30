import React, { useState } from "react";
import Button from "./Button";

function AddTask({ handleAddTask }) {
  const [task, setTask] = useState("");

  return (
    <div className="w-full h-[10%] flex justify-end items-center p-2 mb-2">
      <input
        type="text"
        placeholder="add new task"
        className="mr-2 text-center input-field placeholder:text-black focus:border-pink-300 focus:placeholder:invisible"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <Button
        src="/src/assets/icons/add.png"
        onClick={() => {
          handleAddTask(task);
          setTask("");
        }}
      />
    </div>
  );
}

export default AddTask;
