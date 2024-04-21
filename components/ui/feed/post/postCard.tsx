import Image from "next/image";
import sampleProfile from "@/public/New folder/sampleProfile.png"
import samplePostpic from "@/public/New folder/queen.jpeg"
import {BookmarkIcon,ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import {HeartIcon} from "@heroicons/react/24/outline";
import { CircleChevronRightIcon } from 'lucide-react';
export default function PostCard(params:{UserID: string, Content: string}
){
    return(
        <div className=" bg-pink-500 w-[100%] my-[5vh] flex justify-center content-center rounded-2xl m-[10px] text-center text-2xl text-white">
            <div className="w-[80%]  grid-rows-10 grid-cols-9 p-[20px]">
            <div className="top-bar flex flex-row  ">
                    <Image src={sampleProfile} alt="" className="rounded-full w-[54px] h-[54px]"/>

                <div className=" ml-5 user-avatar text-xl font-bold border-solid border-black">
                    {params.UserID}
                    <div className="text-gray-400 w-fit font-semibold ">@username</div>
                    
                    </div>
            </div>
            <div className="bio  border-solid border-black text-lg">{params.Content}
      
         </div>
            <div className="content bg-slate-50 border-solid border-black text-black  rounded-lg"><Image src={samplePostpic} alt="" /></div>
            
            <div className="react-bar border-solid border-black flex flex-row justify-between p-5">
                <button><ChatBubbleOvalLeftIcon className="w-[30px]"/></button>
                <button><HeartIcon  className="w-[30px]"/></button>
                <button><BookmarkIcon  className="w-[30px]"/></button>
            
                <button><CircleChevronRightIcon/></button>
            
            </div>
{/*             
            <div className="comments  border-solid border-black">Comments</div> */}
            <br />
        </div>
        </div>
    )
}