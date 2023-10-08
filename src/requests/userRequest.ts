import axios from "axios";
import config from "../config.json";
import { User } from "../types/userType";

export async function getUsers() {
  return await axios
    .get<User[]>(config.SERVER_URL + `users`)
    .then((response) => response.data);
}
