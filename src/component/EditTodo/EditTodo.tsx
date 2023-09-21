import React, { useState } from "react";

interface EditTodoProps {
  editedObj: { task: string; status: boolean; id: number };
  saveChanges: (newObj: { task: string; status: boolean; id: number }) => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ editedObj, saveChanges }) => {
  const [editedTodo, setEditedTodo] = useState(editedObj);

  const editTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo({
      ...editedTodo,
      task: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    saveChanges(editedTodo);
  };

  return (
    <div>
      <h2>Edit TODO Component</h2>
      <input type="text" onChange={editTodo} value={editedTodo.task} />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditTodo;
