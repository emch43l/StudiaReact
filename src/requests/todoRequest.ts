import axios from "axios";
import config from "../config.json";
import { Todo } from "../types/todoType";

export async function getUserTodos(userId: number) {
  return await axios
    .get<Todo[]>(config.SERVER_URL + `todos?userId=${userId}`)
    .then((response) => response.data);
}

export async function toggleUserTodo(todoId: number, isCompleted: boolean) {
  return await axios
    .patch<Todo>(
      config.SERVER_URL + `todos/${todoId}`,
      {
        completed: isCompleted,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => response.data);
}
