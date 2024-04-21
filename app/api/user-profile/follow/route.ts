import executeQuery from "@/lib/MySQL/db"
import { NextResponse } from "next/server"


export const GET = async (req: Request, res: Response) => {
    
    const body = (new URL(await req.url)).searchParams

    
    try {
        const trialFetch = await executeQuery(
            {
                query: "SELECT * FROM Followers where follower_id = ? and followed_id = ?",
                values: [
                    body.get('follower_id'),
                    body.get('followed_id')
                ]
            }
        )
        console.log(trialFetch)
        return NextResponse.json(
            {
                mesage: "OK POST", trialFetch
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

export const POST = async (req: Request, res: Response) => {
    
    const body = (new URL(await req.url)).searchParams

    
    try {
        const trialFetch = await executeQuery(
            {
                query: "INSERT INTO Followers(follower_id ,followed_id) values (?,?)",
                values: [
                    body.get('follower_id'),
                    body.get('followed_id')
                ]
            }
        )
        console.log(trialFetch)
        return NextResponse.json(
            {
                mesage: "OK POST", trialFetch
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
    
    const body = (new URL(await req.url)).searchParams

    
    try {
        const trialFetch = await executeQuery(
            {
                query: "DELETE FROM Followers WHERE follower_id =?  and followed_id=?",
                values: [
                    body.get('follower_id'),
                    body.get('followed_id')
                ]
            }
        )
        console.log(trialFetch)
        return NextResponse.json(
            {
                mesage: "OK POST", trialFetch
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

// export const DELETE = async (req: Request, res: Response) => {
//     const body = (await req.json()).data;
//     try {
//         const trialFetch = await executeQuery(
//             {
//                 query: "DELETE FROM USERS WHERE UserID = ?",
//                 values: [
//                     body.id
//                 ]
//             }
//         )
//         console.log(trialFetch)
//         return NextResponse.json(
//             {
//                 mesage: "OK DELETE", trialFetch
//             },
//             { status: 200 }
//         )
//     } catch (err) {
//         return NextResponse.json(
//             {
//                 mesage: "Error", err
//             },
//             { status: 500 }
//         )
//     }
// }