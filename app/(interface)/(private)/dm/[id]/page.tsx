"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import MessageList from "@/components/dm/messageList";
import Chat from "@/components/dm/chat";
export default  function DmPage(){

    const {userId} = useAuth();
    const {user} = useUser();
    return(
        <div className="grid grid-cols-[3fr_7fr]">
            <MessageList/>
            <Chat/>
        </div>
    )
}