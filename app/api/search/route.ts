// import executeQuery from "@/lib/MySQL/db"
// import { NextResponse } from "next/server"

// export const GET = async (req: Request, res: Response) => {
//     const getUrl = (new URL(await req.url)).searchParams
//     const userId = (getUrl).get('userid')
//     // try {
//     //     const trialFetch = await executeQuery(
//     //         {
//     //             query: 'select (PostID,  UserID, Content, MediaURL, PostDate, likeCount, commentCount) from posts JOIN followers ON follower_id = ? ORDER BY PostDate DESC',
//     //             values: [userId]
//     //         }
//     //     )

//         console.log(trialFetch)
//         return NextResponse.json(
//             {
//                 mesage: "OK", trialFetch
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
