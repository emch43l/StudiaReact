import axios from "axios";
import config from "../config.json";
import { Post } from "../types/postType";

export async function getPosts() {
  return await axios
    .get<Post[]>(config.SERVER_URL + "posts")
    .then((response) => response.data);
}
