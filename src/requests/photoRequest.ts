import axios from "axios";
import config from "../config.json";
import { Photo } from "../types/photoType";

export async function getPhotos(startIndex: number = 0,limit: number = 10) {
    return await axios.get<Photo[]>(config.SERVER_URL+`photos?_start=${startIndex}&_limit=${limit}`).then(response => response.data);
};