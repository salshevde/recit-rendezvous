import clientPromise from "@/lib/mongoDB/db";
import { NextResponse } from "next/server"

export const GET = async(req:Request, res:Response)=>{
    const getUrl = (new URL(req.url)).searchParams
    const likerId= getUrl.get('likerId')!
    const posterId= getUrl.get('posterId')
    const postId= getUrl.get('postId')
    try {
        const client = await clientPromise;
        const db = client.db('posts');
        const findQuery = db.collection(posterId! ).find({
            postId: postId
        })
        const postList:Array<string> = (await findQuery.toArray())[0].likes
        console.log('this')
        console.log(likerId)
        const res = postList.find((liker)=>{
            return liker == likerId
        })

        
        return NextResponse.json(
            {
                message:"OK",postList },
                {status:200}
        )   
    } catch (err) {
        return NextResponse.json(
            {
                message:"Error", err},
                {status:500}
        )        
    }
}

export const POST = async (req: Request, res: Response) => {
    const getUrl = (new URL(req.url)).searchParams
    const likerId= getUrl.get('likerId')!
    const posterId= getUrl.get('posterId')
    const postId= getUrl.get('postId')
    try {
        

        const client = await clientPromise;
        const db = client.db('posts');


        const insertQueryCollection = await db.collection(posterId! ).findOneAndUpdate({postId: postId},{
            $push:{
                likes: likerId
            }
        })

        // console.log(insertQuery)
        return NextResponse.json(
            {
                message: "OK", insertQueryCollection
            },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            {
                message: "Error", err
            },
            { status: 500 }
        )
    }
}

export const DELETE = async (req: Request, res: Response) => {
    const getUrl = (new URL(req.url)).searchParams
    const likerId= getUrl.get('likerId')!
    const posterId= getUrl.get('posterId')
    const postId= getUrl.get('postId')
    try {
        

        const client = await clientPromise;
        const db = client.db('posts');


        const deleteQueryCollection = await db.collection(posterId! ).findOneAndUpdate({postId: postId},{
            $pull
            :{
                likes: likerId
            }
        })

        // console.log(insertQuery)
        return NextResponse.json(
            {
                message: "OK", deleteQueryCollection
            },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            {
                message: "Error", err
            },
            { status: 500 }
        )
    }
}


