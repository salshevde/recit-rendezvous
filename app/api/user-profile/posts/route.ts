import executeQuery from "@/lib/MySQL/db"
import clientPromise from "@/lib/mongoDB/db";
import { NextResponse } from "next/server"

export const GET = async(req:Request, res:Response)=>{
    const getUrl = (new URL(await req.url)).searchParams
    const userId =(getUrl).get('userid')
    try {
        const client = await clientPromise;
        const db = client.db('posts');
        const findQuery = db.collection(userId!).find({})
        const postList = await findQuery.toArray()
        return NextResponse.json(
            {
                message:"OK", postList},
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

    // const userDetailsAuth  = (await currentUser())
    try {
        const body = await req.json()
        
        const client = await clientPromise;
        const db = client.db('posts');
        const insertQuerySQL = await executeQuery({
            query: "INSERT INTO POSTS(UserID, Content) VALUES (?,?)",
            values: [
                body.userId,
                body.title

            ]
        })

        const postId = (await executeQuery({
            query: 'SELECT * from temp_post_id ORDER BY auto_id DESC LIMIT 1',
            values: []
        }))[0].PostID


        const insertQueryCollection = await db.collection(body.userId).insertOne({
            title: body.title,
            userId: body.userId,
            content: body.content,
            postId: postId,
            mediaList: (body.imagesList).split(','),
            likes: [],
            comments: []

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

