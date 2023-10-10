import axios from "axios";
import config from "../config.json";
import { Post } from "../types/postType";

export async function getUserPosts(userId: number) {
  return await axios
    .get<Post[]>(config.SERVER_URL + `posts?userId=${userId}`)
    .then((response) => response.data);
}

export async function createPost(post: Post) {
  return await axios
    .post(config.SERVER_URL + "posts", post, {
      headers: {
        "Content-Type": "applicaiton/json; charset=utf-8",
      },
    })
    .then((response) => response.data);
}

export async function updatePost(post: Post) {
  return await axios
    .put(config.SERVER_URL + `posts/${post.id}`, post, {
      headers: {
        "Content-Type": "applicaiton/json; charset=utf-8",
      },
    })
    .then((response) => response.data);
}

export async function deletePost(postId: number) {
  return await axios.delete(config.SERVER_URL + `posts/${postId}`);
}

export async function getPosts() {
  return await axios
    .get<Post[]>(config.SERVER_URL + "posts")
    .then((response) => response.data);
}
