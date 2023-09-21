import React from "react";
import "./TodoList.css"; // Импорт файла стилей

interface Todo {
  id: number;
  task: string;
  status: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTask: (id: number) => void;
  getEditedObj: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTask, getEditedObj }) => {
  return (
    <>
      <h2>TODO List Component</h2>
      <ul className="todo-list"> {/* Используйте className для применения стилей */}
        {todos.map((item) => (
          <li key={item.id} className="todo-item"> {/* Используйте className для применения стилей */}
            {item.task}
            <div className="todo-actions"> {/* Используйте className для применения стилей */}
              <button onClick={() => deleteTask(item.id)}>delete</button>
              <button onClick={() => getEditedObj(item.id)}>edit</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
