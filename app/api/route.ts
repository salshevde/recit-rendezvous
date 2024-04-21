import executeQuery from "@/lib/MySQL/db"
import { NextResponse } from "next/server"
export const GET = async(req:Request, res:Response)=>{
    
    try {
        const trialFetch = await executeQuery(
            {query:"SELECT * FROM users",
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

export const POST = async(req:Request, res:Response)=>{
    // const {} = await req.json()
    try {
        const trialFetch = await executeQuery(
            {query:"INSERT INTO trial values (4),(5),(6)",
            values:[]
            }
        )
        console.log(trialFetch)
        return NextResponse.json(
            {
                mesage:"OK POST", trialFetch},
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