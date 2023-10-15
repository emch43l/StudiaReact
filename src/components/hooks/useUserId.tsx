import { useParams } from "react-router-dom";

export const USERID_PARAM_NAME = "userId";

export default function useUserId(): number {
    const { userId } = useParams<{userId: string}>();

    if(userId === undefined)
        throw new Error("Param not found !");

    return Math.abs(parseInt(userId));
}