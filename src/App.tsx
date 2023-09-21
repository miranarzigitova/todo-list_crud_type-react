import React, { useState } from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";
import EditTodo from "./component/EditTodo/EditTodo";


interface Todo {
  id: number;
  task: string;
  status: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editedObj, setEditedObj] = useState<Todo | null>(null);

  function handleTask(newObj: Todo) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function deleteTask(id: number) {
    let delTodos = todos.filter((task) => task.id !== id);
    setTodos(delTodos);
  }

  function saveChanges(newObj: Todo) {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }

  function getEditedObj(id: number) {
    let oneObj = todos.find((item) => item.id === id);
    setEditedObj(oneObj || null);
  }

  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList deleteTask={deleteTask} todos={todos} getEditedObj={getEditedObj} />
      {editedObj ? <EditTodo editedObj={editedObj} saveChanges={saveChanges} /> : null}
    </div>
  );
};

export default App;
