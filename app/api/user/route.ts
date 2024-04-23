import clientPromise from "@/lib/mongoDB/db";
import executeQuery from "@/lib/MySQL/db"
import { NextResponse } from "next/server"
import { string } from "zod";
export const GET = async(req:Request, res:Response)=>{
    const body = (await req.json()).data;
    try {

        const trialFetch = await executeQuery(
            {query:"SELECT * FROM USERS where UserID = ?",
            values:[body.id]
            }
        )

        console.log(trialFetch)
        return NextResponse.json(
            {
                mesage:"OK", trialFetch},
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

export const POST = async (req: Request, res: Response) => {
    const body = (await req.json()).data;
    try {        
        const client = await clientPromise;
        const db = client.db('accounts');
        const insertQuerySQL = await executeQuery(
            {
                query: "INSERT INTO Users(UserID, Email, FullName) values (?,?,?)",
                values: [
                    body.id,
                    body.email_addresses[0].email_address,
                    body.first_name+" "+body.last_name
                ]
            }
        )

        const insertQueryCollection = await db.collection(body.id).insertOne({
            userId: body.id,
            username: "",
            quote:"",
            email:body.email_addresses[0].email_address,
            name:body.first_name+" "+body.last_name,
            postList:[],
            likedPostList:[],
            myList:[],
            publishedContentList:[]
        })
        return NextResponse.json(
            {
                mesage: "OK POST", insertQuerySQL
            },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            {
                mesage: "Error", err
            },
            { status: 500 }
        )
    }
}

export const DELETE = async (req: Request, res: Response) => {
    const body = (await req.json()).data;
    try {
        const trialFetch = await executeQuery(
            {
                query: "DELETE FROM USERS WHERE UserID = ?",
                values: [
                    body.id
                ]
            }
        )
        console.log(trialFetch)
        return NextResponse.json(
            {
                mesage: "OK DELETE", trialFetch
            },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            {
                mesage: "Error", err
            },
            { status: 500 }
        )
    }
}