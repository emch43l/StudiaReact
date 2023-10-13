import axios from "axios";
import { Album } from "../types/albumType";
import config from "../config.json";

export async function getUserAlbums(userId: number) {
  return await axios
    .get<Album[]>(config.SERVER_URL + `albums?userId=${userId}`)
    .then((response) => response.data);
}
