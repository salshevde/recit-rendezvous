"use client";
import { Button } from "@/components/ui/button";
import FollowListCard from "@/components/ui/profile/followlist/followListcard";
import { getCurrentUserId } from "@/lib/actions";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
axios.defaults.baseURL = 'http://localhost:3000';

export default function FollowersPage()
{

    const followerListRef = useRef();
    const [followerList, setfollowerList] = useState([]);

        // ***
        const [updated, setUpdated] = useState(false);
        const [updatedError, setUpdatedError] = useState(false);
        const [deleted, setDeleted] = useState(false);
        const [deletedError, setDeletedError] = useState(false);
  
        
        // Functions
    const userId = useUser().user?.id;

    async function generateList(){
        axios.get(`api/user-profile/follow/list/followers/?userid=${userId}`)
            .then(({data}) => {
                const res = data.trialFetch
                setfollowerList(res)
            })
            .catch((error) => {
                console.error(error);
            })
    }

    useEffect(
        ()=>{
            generateList()
        },
        []
    )
    return (
        
        <div className="main flex flex-col items-center">
            <div className="text-8xl">
                My List
            </div>
            {followerList.map((followerItem, index)=>{
                return(
                <FollowListCard
                key={followerItem.userId}
                icon={followerItem.profile_image_url}
                name={followerItem.username}
                followedAt= {followerItem.followedAt}

                />
                )
            }
        )}
            
        </div>
                
       
    )
}