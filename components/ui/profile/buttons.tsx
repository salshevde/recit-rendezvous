"use client"
import { useEffect, useState } from "react";
import { Button } from "../button";
import { PlusCircleIcon } from "lucide-react"
import Link from "next/link";
import axios from "axios";

export function FriendButtons(params:{
  selfId : string,
  otherId: string
}){

  const [follow, setFollow] = useState("Loading"); // set to following status

  async function isFollowing(){
    axios.get(`/api/user-profile/follow/?follower_id=${params.selfId}&followed_id=${params.otherId}`)
            .then(({data}) => {
                const res = data.trialFetch
                if(res[0])
                    setFollow("Following")
                else  
                  setFollow("Follow")
            })
            .catch((error) => {
                console.error(error);
            });
  }

  async function handleFollowClick(){
    if(follow== "Follow"){
      axios.post(`/api/user-profile/follow/?follower_id=${params.selfId}&followed_id=${params.otherId}`)
            .then(({data}) => {
                const res = data.trialFetch
                setFollow("Following")
                
                return res
            })
            .catch((error) => {
                console.error(error);
            });
      }
    else{
      axios.delete(`/api/user-profile/follow/?follower_id=${params.selfId}&followed_id=${params.otherId}`)
            .then(({data}) => {
                const res = data.trialFetch
                setFollow("Follow")
                
                return res
            })
            .catch((error) => {
                console.error(error);
            });
      

      }
  }

  useEffect(()=>{
    isFollowing();
    
  },[])
    return(
        <>
            {(follow== "Follow")?
              
              <Button onClick={handleFollowClick} className="w-full mt-5 row-start-5 col-start-4 bg-pink-950 hover:bg-pink-100 hover:text-black ">{follow}</Button>
            :
            <Button onClick={handleFollowClick} className="w-full mt-5 row-start-5 col-start-4 bg-pink-600 hover:bg-pink-100 hover:text-black ">{follow}</Button>}
        </>
    )
}

export function MyButtons(){
  return(<div className=" col-span-7 flex flex-row justify-center mt-5">
  <Button  className="mr-10 bg-pink-950 hover:bg-pink-100 hover:text-black ">My Followers</Button>
  <Button  className="ml-10 bg-pink-950 hover:bg-pink-100 hover:text-black ">My Following</Button>
  </div>)
}

export default function CreatePostButton(){
  return(
    <div>
      <div className="fixed bottom-[5vh] right-[5vh] text-[#F40092] flex flex-col content-center">
        <Link href={"/profile/addpost"}>
                    <PlusCircleIcon
                    width={50} height={50} color="#F40092"/>
                    <div>Add Post</div>
                    </Link>
            </div>
            
    </div>
  )
}