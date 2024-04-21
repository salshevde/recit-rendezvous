import clientPromise from "@/lib/mongoDB/db";
import { NextResponse } from "next/server"

export const POST = async(req:Request, res:Response)=>{
    
    // const userDetailsAuth  = (await currentUser())
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const { title, content } = req.body;
        const post = await db.collection("posts").insertOne({
            title,
            content,
          });


        return NextResponse.json(
            {
                mesage:"OK", post},
                {status:200}
        )   
    } catch (err) {
        return NextResponse.json(
            {
                mesage:"Error", err},
                {status:500}
        )        
    }
}

export const GET = async(req:Request, res:Response)=>{
    
    // const userDetailsAuth  = (await currentUser())
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const post = await db.collection('posts').findOne();
        

        return NextResponse.json(
            {
                mesage:"OK", post},
                {status:200}
        )   
    } catch (err) {
        return NextResponse.json(
            {
                mesage:"Error", err},
                {status:500}
        )        
    }
}

