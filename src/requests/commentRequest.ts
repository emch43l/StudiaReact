import axios from "axios";
import { Comment } from "../types/commentType";
import config from "../config.json";

export async function getPostComments(postId: number) {
  return await axios
    .get<Comment[]>(config.SERVER_URL + `comments?postId=${postId}`)
    .then((response) => response.data);
}

export async function addPostComment(comment: Comment) {
  return await axios
    .post<Comment>(config.SERVER_URL + `comments`, comment, {
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    })
    .then((response) => response.data);
}
