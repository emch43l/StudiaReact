import axios from "axios";
import { AddCommentType, Comment, EditCommentType } from "../types/commentType";
import config from "../config.json";

export async function getPostComments(postId: number) {
  return await axios
    .get<Comment[]>(config.SERVER_URL + `comments?postId=${postId}`)
    .then((response) => response.data);
}

export async function addPostComment(comment: AddCommentType) {
  return await axios
    .post<Comment>(config.SERVER_URL + `comments`, comment, {
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    })
    .then((response) => response.data);
}

export async function editPostComment(comment: EditCommentType) {
  return await axios
    .put<Comment>(config.SERVER_URL + `comments/${comment.id}`, comment, {
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    })
    .then((response) => response.data);
}

export async function deletePostComment(commentId: number) {
  return await axios
    .delete<Comment>(config.SERVER_URL + `comments/${commentId}`)
}