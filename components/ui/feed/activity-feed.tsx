"use client";
import PostCard from "@/components/ui/feed/post/postCard"
import { postDetails } from "@/lib/definitions";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useState,useEffect, useRef  } from "react"
axios.defaults.baseURL = 'http://localhost:3000';

export default function ActivityFeed()
{

    
    // Set refs
    const postListRef = useRef();

    // States
    const [postsList, setPostsList] = useState([]);

    const userId = useUser().user?.id

    async function getPosts(){
        axios.get(`/api/user-profile/feed/posts/?userid=${userId}`)
            .then(({data}) => {
                const res = data.trialFetch
                setPostsList(res)
                
                return res
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // async function delPost(){

    // }
    
    // async function editPost(){

    // }

    useEffect(() => {
        getPosts(); 
      });

    
    return (
        
        <div className="main flex flex-col items-center w-[100%]">

            {postsList.map((post:postDetails)=>{
                return(
                    <PostCard
                    key = {post.postId}
                    post = {post}

        
                    />
                )
            }
        )}
            
        </div>
                
       
    )
}