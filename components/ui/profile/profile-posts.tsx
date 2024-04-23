"use client";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/feed/post/postCard"
import { postDetails } from "@/lib/definitions";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState,useEffect, useRef  } from "react"
axios.defaults.baseURL = 'http://localhost:3000';

export default function ProfileUnder()
{

    
    // Set refs
    const postListRef = useRef();

    // States
    const [postsList, setPostsList] = useState([]);

    // ***
    const [updated, setUpdated] = useState(false);
    const [updatedError, setUpdatedError] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [deletedError, setDeletedError] = useState(false);
    
    // 
    const userId = useSearchParams().get('userId')

    function getPosts(){
        axios.get(`/api/user-profile/posts/?userid=${userId}`)
            .then(({data}) => {
                const res = data.postList
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

            {postsList?postsList.map((post:postDetails)=>{
                return(
                    <PostCard
                    key = {post.postId}
                    post = {post}

                    />
                )
            }
        ):null}
            
        </div>
                
       
    )
}