import axios from "axios";
import { Comment } from "../types/commentType";
import config from '../config.json';

export async function getPostComments(postId: number) {
    return await axios
      .get<Comment[]>(
        config.SERVER_URL + `comments?postId=${postId}`
      )
      .then((response) => response.data);
  }