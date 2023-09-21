import React, { useState } from "react";

interface AddTodoProps {
  handleTask: (newObj: { task: string; status: boolean; id: number }) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ handleTask }) => {
  const [task, setTask] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (!task.trim()) {
      alert("Input is empty!");
      return;
    }
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    setTask("");
    handleTask(newTask);
  };

  return (
    <div>
      <h2>Add TODO Component</h2>
      <input type="text" onChange={handleInput} value={task} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
