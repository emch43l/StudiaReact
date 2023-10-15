import { Todo } from "../../types/todoType";
import { useState } from "react";

export default function UserTodoCompleteButton({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: Function;
}) {
  const [isChanging, toggleChanging] = useState(false);

  const handleTodoToggle = () => {
    toggleChanging(true);
    toggleTodo(todo.id, !todo.completed).finally(() => toggleChanging(false));
  };

  return (
    <button
      onClick={handleTodoToggle}
      disabled={isChanging ? true : false}
      className={
        todo.completed
          ? "btn btn-sm bg-green-400 hover:text-black rounded-md text-green-100"
          : "btn btn-sm"
      }
    >
      {isChanging ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <i className="fas fa-check"></i>
      )}
    </button>
  );
}
