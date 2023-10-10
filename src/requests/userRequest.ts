import axios from "axios";
import config from "../config.json";
import { User } from "../types/userType";

export async function getUsers() {
  return await axios
    .get<User[]>(config.SERVER_URL + `users`)
    .then((response) => response.data);
}

export async function createUser(user: User) {
  return await axios.post<User>(config.SERVER_URL + 'users', user, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }).then((response) => response.data)
}

export async function updateUser(user: User) {
  return await axios
    .put<User>(config.SERVER_URL + `users/${user.id}`, user, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then((response) => response.data);
}

export async function deleteUser(userId: number) {
  return await axios
    .delete(config.SERVER_URL + `users/${userId}`)
}