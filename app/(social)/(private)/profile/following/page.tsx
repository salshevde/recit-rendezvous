"use client";
import { Button } from "@/components/ui/button";
import FollowListCard from "@/components/ui/profile/followlist/followListcard";
import { getCurrentUserId } from "@/lib/actions";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
axios.defaults.baseURL = 'http://localhost:3000';

export default function FollowingsPage()
{

    const followingListRef = useRef();
    const [followingList, setfollowingList] = useState([]);

        // ***
        const [updated, setUpdated] = useState(false);
        const [updatedError, setUpdatedError] = useState(false);
        const [deleted, setDeleted] = useState(false);
        const [deletedError, setDeletedError] = useState(false);
  
        
        // Functions
    const userId = useUser().user?.id;

    async function generateList(){
        axios.get(`api/user-profile/follow/list/followings/?userid=${userId}`)
            .then(({data}) => {
                const res = data.trialFetch
                setfollowingList(res)
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
            {followingList.map((followingItem, index)=>{
                return(
                <FollowListCard
                key={followingItem.userId}
                icon={followingItem.profile_image_url}
                name={followingItem.username}
                followedAt= {followingItem.followedAt}

                />
                )
            }
        )}
            
        </div>
                
       
    )
}