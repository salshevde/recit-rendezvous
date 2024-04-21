"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import MessageList from "@/components/ui/dm/messageList";
import Chat from "@/components/ui/dm/chat";
export default function DmPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  return (
    <div className="grid grid-cols-[3fr_7fr] overflow-hidden">
      <MessageList/>
      <Chat/>
      
    </div>
  );
}
