import { useParams } from "react-router-dom";
import { getUserTodos, toggleUserTodo } from "../requests/todoRequest";
import { Todo } from "../types/todoType";
import { useState, useEffect } from "react";
import useUserId from "../hooks/useUserId";
import UserTodoCompleteButton from "./buttons/userTodoCompleteButton";

export default function TodosTable() {
  const userId = useUserId();
  const [todos, setTodos] = useState<Todo[] | null>(null);
  
  useEffect(() => {
    (async () => {
      const data = await getUserTodos(userId);
      setTodos(data);
    })();
  }, []);

  const toggleToto = (todoId: number, isCompleted: boolean) => {
    return toggleUserTodo(todoId, isCompleted).then((todo) => {
      setTodos(
        todos?.map((td) => {
          if (td.id === todoId) {
            td.completed = todo.completed;
          }
          return td;
        }) ?? []
      );
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos
            ? todos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>
                    <UserTodoCompleteButton
                      todo={todo}
                      toggleTodo={toggleToto}
                    />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
