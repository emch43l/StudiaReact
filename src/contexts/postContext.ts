import { createContext } from "react";
import { Post } from "../types/postType";

export const PostContext = createContext<Post | null>(null);