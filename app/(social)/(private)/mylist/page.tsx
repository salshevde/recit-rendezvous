"use client";
import { Button } from "@/components/ui/button";
import { getCurrentUserId } from "@/lib/actions";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
axios.defaults.baseURL = 'http://localhost:3000';

export default function MyListPge()
{

    const favListRef = useRef();
    const [favList, setFavList] = useState([]);

        // ***
        const [updated, setUpdated] = useState(false);
        const [updatedError, setUpdatedError] = useState(false);
        const [deleted, setDeleted] = useState(false);
        const [deletedError, setDeletedError] = useState(false);
  
    const userId = useUser().user?.id;
    async function generateList(){
        axios.get(`api/user-profile/mylist/?userid=${userId}`)
            .then(({data}) => {
                const res = data.trialFetch
                setFavList(res)
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
            {favList.map((favItem, index)=>{
                return(
                    <div className = "h-[5vh] p-[5vh] m-[10vh] bg-pink-500 text-white rounded-md" key = {favItem.MyListId}>
                        {favItem.Contentname}
                    </div>
                )
            }
        )}
            
        </div>
                
       
    )
}