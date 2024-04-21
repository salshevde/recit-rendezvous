"use server"
import { currentUser } from "@clerk/nextjs";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

export async function getCurrentUserId() {
    try {
        const res = await currentUser();
        // Ensure res is a plain object
        // const plainRes = JSON.parse(JSON.stringify(res?.id));
        // return plainRes;
        return res?.id
    } catch (error) {
        console.error(error);
    }
}


// const userId =(new URL(await req.url)).searchParams.get('userId')
