import Link from "next/link"

export default function SearchCard(
    params:{
        contentId: string
        contentUrl: string
        contentThumbnail: string
        contentType: string
        contentNote: string
    }
){
    return(
        <Link href={params.contentUrl}>
        <div className="w-full p-10 rounded-sm m-5 bg-slate-500 flex flex-row">
            <div className="w-[30%]">
                {params.contentThumbnail}
            </div>

            <div className="text-2xl text-white">
                {params.contentId}
            </div>

        </div>
        </Link>
    )
}