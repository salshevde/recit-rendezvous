import executeQuery from "@/lib/MySQL/db"
import { NextResponse } from "next/server"

export const GET = async(req:Request, res:Response)=>{
    
    // const userDetailsAuth  = (await currentUser())
    try {
        // console.log("-------------------")
        // console.log(userDetailsAuth?.id)
        const trialFetch = await executeQuery(
            {query:"SELECT * FROM USERS",
            values:[]
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

// export const POST = async (req: Request, res: Response) => {
//     const body = (await req.json()).data;
//     try {
//         const trialFetch = await executeQuery(
//             {
//                 query: "INSERT INTO Users(UserID, Username, Email, FirstName, LastName,ProfilePicture) values (?,?,?,?,?,?)",
//                 values: [
//                     body.id,
//                     body.username,
//                     body.email_addresses[0].email_address,
//                     body.first_name,
//                     body.last_name,
//                     body.profile_image_url
//                 ]
//             }
//         )
//         console.log(trialFetch)
//         return NextResponse.json(
//             {
//                 mesage: "OK POST", trialFetch
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