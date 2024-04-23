import executeQuery from "@/lib/MySQL/db"
import { RowDataType } from "@/lib/definitions"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    const getUrl = (new URL(req.url)).searchParams
    const query = getUrl.get('query')?.split(" ")

    let results: { type: string, data: RowDataType }[] = [];
    try {
        if (query) {
            for (const term of query) {
                console.log('query term')
                console.log(term);
                const trialFetch = await executeQuery(

                    {
                        query: `
                select *
                from Users
                where 
                    FullName like ?
                    or
                    UserId like ?
                
                `, // Add username later
                        values: ['%' + term + '%', '%' + term + '%']
                    }
                )

                for (const item of trialFetch) {

                    results.push({
                        type: 'user', // dynamic later
                        data: item
                    })
                }


            }

        }
        console.log(results)
        return NextResponse.json(
            {
                mesage: "OK", results
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

